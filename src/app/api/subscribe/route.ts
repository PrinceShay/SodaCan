import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import ThankYouEmail from "@/components/ThankYouEmail";

// MongoDB URI and database name from environment variables
const uri = process.env.MONGODB_URI!;
const dbName = "sne";
const collectionName = "user";

// MongoDB connection
async function getDbConnection() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Save email to MongoDB
async function saveEmailToMongoDb(email: string): Promise<void> {
  try {
    const collection = await getDbConnection();

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      throw new Error("Email is already subscribed.");
    }

    // Save email in the database
    const subscriber = {
      email,
      subscribedAt: new Date(),
    };

    await collection.insertOne(subscriber);
    console.log("Email successfully saved to MongoDB.");
  } catch (error) {
    console.error("Error saving email to MongoDB:", error);
    throw error;
  }
}

// Send email notification and thank-you email
async function sendEmailNotification(email: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Notify admin about the subscription
    const adminNotificationMailOptions = {
      from: "no-reply@seenoevil-clothing.com",
      to: "j.roestel@jannisroestel.de",
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed to the newsletter: ${email}`,
    };

    // Send a thank-you email to the subscriber
    const thankYouMailOptions = {
      from: "no-reply@seenoevil-clothing.com",
      to: email, // Subscriber's email
      subject: "Thank You for Your Interest!",
      html: ThankYouEmail(), // The thank-you email template
    };

    // Send both emails
    await transporter.sendMail(adminNotificationMailOptions);
    console.log("Admin notification email sent successfully!");

    await transporter.sendMail(thankYouMailOptions);
    console.log("Thank-you email sent to subscriber successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email notifications.");
  }
}

// Handle POST request
export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email address
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Save email to MongoDB and send email notifications
    await saveEmailToMongoDb(email);
    await sendEmailNotification(email);

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          (error instanceof Error ? error.message : "Unknown error") ||
          "Failed to subscribe. Please try again later.",
      },
      {
        status:
          error instanceof Error &&
          error.message === "Email is already subscribed."
            ? 409
            : 500,
      }
    );
  }
}
