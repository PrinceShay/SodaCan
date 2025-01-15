import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy | SEE NO EVIL®"
};

export default function page() {
  return (
    <section className="text-white p-6 md:p-12 flex flex-col md:grid grid-cols-3 gap-8">
      <Link
        href={"/"}
        className="col-span-3 flex gap-2 items-center group hover:text-red-600 justify-self-start"
      >
        <ArrowLeft className="group-hover:-translate-x-2 transition-transform ease-out" />
        Go Back
      </Link>
      <h1 className="text-4xl mb-4">Privacy Policy</h1>

      <div className="col-span-2 max-w-xl justify-self-end">
        <p className="text-gray-300">
          This Privacy Policy explains how your personal information is
          collected, used, and shared when you visit or make a purchase from{" "}
          <strong>seenoevil-clothing.com</strong> (the &quot;Site&quot;).
        </p>

        <h2 className="text-2xl mt-6 mb-2">Personal Information We Collect</h2>
        <p className="text-gray-300">
          When you visit the Site, we automatically collect certain information
          about your device, including details about your web browser, IP
          address, time zone, and cookies installed on your device.
          Additionally, we collect data about the web pages or products you
          view, the websites or search terms that referred you to the Site, and
          how you interact with the Site. This is referred to as &quot;Device
          Information.&quot;
        </p>
        <p className="text-gray-300">We collect Device Information using:</p>
        <ul className="list-disc ml-6">
          <li className="text-gray-300">
            <strong>Cookies</strong>: Small data files stored on your device.
            Learn more at{" "}
            <a href="http://www.allaboutcookies.org" className="underline">
              www.allaboutcookies.org
            </a>
            .
          </li>
          <li className="text-gray-300">
            <strong>Log Files</strong>: Track actions on the Site, capturing
            your IP address, browser type, ISP, referring/exit pages, and
            timestamps.
          </li>
          <li>
            <strong>Web Beacons, Tags, Pixels</strong>: Electronic files
            recording navigation and browsing behavior.
          </li>
        </ul>
        <p className="text-gray-300">
          Additionally, when you make (or attempt to make) a purchase, we
          collect your name, billing/shipping address, payment details (e.g.,
          credit card numbers), email, and phone number. This is referred to as
          &quot;Order Information.&quot;
        </p>

        <h2 className="text-2xl mt-6 mb-2">
          How We Use Your Personal Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            Fulfill orders (processing payments, arranging shipping, sending
            confirmations).
          </li>
          <li>Communicate with you.</li>
          <li>Screen orders for fraud or risk.</li>
          <li>
            Provide personalized content or ads, in line with your preferences.
          </li>
          <li>
            Enhance our Site by analyzing trends and optimizing the user
            experience.
          </li>
        </ul>

        <h2 className="text-2xl mt-6 mb-2">
          Sharing Your Personal Information
        </h2>
        <p>
          We share your information with trusted third parties to support our
          services:
        </p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            <strong>Shopify</strong>: Our store platform. Read their{" "}
            <a
              href="https://www.shopify.com/legal/privacy"
              className="underline"
            >
              Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Google Analytics</strong>: To understand user behavior. Read
            their{" "}
            <a
              href="https://www.google.com/intl/en/policies/privacy"
              className="underline"
            >
              Privacy Policy
            </a>
            . Opt out{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="underline"
            >
              here
            </a>
            .
          </li>
        </ul>
        <p className="text-gray-300">
          We may also share your data to comply with laws, regulations, or legal
          requests.
        </p>

        <h2 className="text-2xl mt-6 mb-2">Behavioral Advertising</h2>
        <p className="text-gray-300">
          We use your information to deliver tailored ads. Learn more about
          targeted ads at{" "}
          <a
            href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
            className="underline"
          >
            NAI’s guide
          </a>
          .
        </p>
        <p>Opt-out options:</p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              className="underline"
            >
              Ad Preferences
            </a>
          </li>
          <li>
            Google:{" "}
            <a
              href="https://www.google.com/settings/ads/anonymous"
              className="underline"
            >
              Ad Settings
            </a>
          </li>
          <li>
            Bing:{" "}
            <a
              href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
              className="underline"
            >
              Opt-out
            </a>
          </li>
        </ul>
        <p className="text-gray-300">
          For broader opt-out options, visit the{" "}
          <a href="http://optout.aboutads.info/" className="underline">
            Digital Advertising Alliance
          </a>
          .
        </p>

        <h2 className="text-2xl mt-6 mb-2">Your Rights (For EU Residents)</h2>
        <p className="text-gray-300">
          As an EU resident, you have the right to access, update, or delete
          your personal data. Contact us at{" "}
          <a href="mailto:info@seenoevil-clothing.com" className="underline">
            info@seenoevil-clothing.com
          </a>{" "}
          for requests. Your data may be transferred outside Europe for service
          purposes.
        </p>

        <h2 className="text-2xl mt-6 mb-2">Data Retention</h2>
        <p className="text-gray-300">
          We retain order data unless you request deletion.
        </p>

        <h2 className="text-2xl mt-6 mb-2">Minors</h2>
        <p className="text-gray-300">
          The Site is not intended for individuals under 16.
        </p>

        <h2 className="text-2xl mt-6 mb-2">Contact Us</h2>
        <p>For questions or complaints, contact us via:</p>
        <ul className="list-disc ml-6 text-gray-300">
          <li>
            Email:{" "}
            <a href="mailto:info@seenoevil-clothing.com" className="underline">
              info@seenoevil-clothing.com
            </a>
          </li>
          <li>
            Mail: SEE NO EVIL CLOTHING, Jannis Röstel, Poststraße 8, 76829
            Landau, Deutschland
          </li>
        </ul>
      </div>
    </section>
  );
}
