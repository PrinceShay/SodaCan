import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Legal Notice | SEE NO EVIL®"
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
      <h1 className="text-4xl mb-4">Legal Notice</h1>

      <div className="col-span-2 max-w-xl justify-self-end">
        <div>
          <strong>According to § 5 TMG</strong>
        </div>
        <div className="mt-2">
          <strong>SEE NO EVIL CLOTHING</strong>
        </div>
        <div className="text-gray-300">Jannis Röstel</div>
        <div className="text-gray-300">
          Poststraße 8, 76829 Landau, Deutschland
        </div>

        <div className="mt-4">
          <strong>Represented by:</strong>
        </div>
        <div className="text-gray-300">Jannis Röstel</div>

        <div className="mt-4">
          <strong>Contact:</strong>
        </div>
        <div className="text-gray-300">Telephone: 06341 937884</div>
        <div>
          Email:{" "}
          <a href="mailto:info@seenoevil-clothing.com" className="underline">
            info@seenoevil-clothing.com
          </a>
        </div>

        <div className="mt-4">
          <strong>VAT-ID:</strong>
        </div>
        <div className="text-gray-300">
          Sales tax identification number according to §27a Value Added Tax Act:
          DE331277066
        </div>

        <h2 className="text-2xl mt-6 mb-2">Disclaimer</h2>
        <p className="text-gray-300">
          The content of this website is for general information purposes only.
          While we strive to keep the information up-to-date and correct, we
          make no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, or availability with
          respect to the website or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk.
        </p>

        <h2 className="text-2xl mt-6 mb-2">External Links</h2>
        <p>
          Our website may contain links to external websites that are not
          provided or maintained by us. Please note that we do not guarantee the
          accuracy, relevance, timeliness, or completeness of any information on
          these external websites.
        </p>

        <h2 className="text-2xl mt-6 mb-2">Copyright</h2>
        <p className="text-gray-300">
          All content on this website, including text, graphics, logos, and
          images, is the property of See No Evil Clothing and is protected by
          copyright laws. Unauthorized use or reproduction of this content is
          strictly prohibited.
        </p>

        <h2 className="text-2xl mt-6 mb-2">EU Dispute Resolution</h2>
        <p className="text-gray-300">
          The European Commission provides a platform for online dispute
          resolution (ODR), which can be accessed at{" "}
          <a href="https://ec.europa.eu/consumers/odr" className="underline">
            https://ec.europa.eu/consumers/odr
          </a>
          . Consumers can use this platform to settle disputes.
        </p>
      </div>
    </section>
  );
}
