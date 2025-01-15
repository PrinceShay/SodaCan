import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/"); // Immediately redirects to the Coming Soon page
}
