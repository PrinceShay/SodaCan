import Link from "next/link";
import React from "react";

export default function PrimaryButton() {
  return (
    <Link
      href={"/"}
      className="px-8 py-3 bg-green-500 text-xl md:text-4xl font-bebasNeue relative overflow-hidden"
      style={{
        transform: "skewX(-10deg)", // Slants the button diagonally
        transformOrigin: "center",
      }}
    >
      Unleash the Beast
    </Link>
  );
}
