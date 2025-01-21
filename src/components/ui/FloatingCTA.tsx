import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function FloatingCTA() {
  return (
    <div className="fixed z-50 w-full bottom-0 pointer-events-none flex justify-end p-12">
      <PrimaryButton />
    </div>
  );
}
