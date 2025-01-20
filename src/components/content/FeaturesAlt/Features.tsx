import React from "react";
import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <section className=" flex flex-col items-center relative">
      <FeatureItem
        headline={"Unverwechselbarer Geschmack"}
        text={"Erfrischend, kräftig, unvergleichlich."}
        src={"/features/monster.jpg"}
      />
      <FeatureItem
        headline={"Energie für jede Herausforderung"}
        text={"Egal ob im Sport, beim Zocken oder für lange Nächte."}
        src={"/features/dirtbike.jpg"}
        position="left"
      />
      <FeatureItem
        headline={"Vielseitige Auswahl"}
        text={
          "Von klassisch bis kalorienfrei – für jeden Moment die richtige Dose."
        }
        src={"/features/sort.jpg"}
      />
    </section>
  );
}
