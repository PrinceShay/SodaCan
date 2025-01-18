import React from "react";
import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <section className=" flex flex-col items-center relative">
      <FeatureItem
        id="section-1"
        headline="Energie für jede Herausforderung"
        paragraph="Egal ob im Sport, beim Zocken oder für lange Nächte."
        src="/features/dirtbike.jpg"
      />
      <FeatureItem
        id="section-2"
        headline="Unverwechselbarer Geschmack"
        paragraph="Erfrischend, kräftig, unvergleichlich."
        src="/features/monster.jpg"
        right={true}
      />
      <FeatureItem
        id="section-3"
        headline="Vielseitige Auswahl"
        paragraph="Von klassisch bis kalorienfrei – für jeden Moment die richtige Dose."
        src="/features/sort.jpg"
      />
    </section>
  );
}
