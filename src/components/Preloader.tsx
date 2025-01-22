import { Loader2 } from "lucide-react";
import React from "react";

export default function Preloader() {
  return (
    <div className="w-full h-screen bg-[#0C1110] fixed z-[100] flex flex-col items-center justify-center">
      <div>
        <Loader2 color="limeGreen" className="animate-spin" />
      </div>
    </div>
  );
}
