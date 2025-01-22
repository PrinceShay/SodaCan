"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import EventItem from "./EventItem";

import "swiper/css";
import "swiper/css/mousewheel";

export default function Events() {
  const events = [
    {
      title: "Moto Madness",
      description:
        "Erlebe die besten Rider der Welt in einer spektakulären Show.",
      date: "25.02.2025",
      location: "München",
      imageSrc: "/features/dirtbike.jpg",
      href: "/",
      btnTitle: "Tickets sichern",
      active: true,
    },
    {
      title: "Gaming Arena",
      description:
        "Trete gegen die Besten an und erlebe Monster Energy als offiziellen Sponsor.",
      date: "25.03.2025",
      location: "Berlin",
      imageSrc: "/gaming.jpg",
      btnTitle: "Teilnehmen",
      href: "/",
      active: true,
    },
    {
      title: "Skate Rev. 3",
      description: "Hier werden die Grenzen des Skateboardings neu definiert.",
      date: "10.05.2025",
      location: "Köln",
      imageSrc: "/skate.jpg",
      href: "/",
      btnTitle: "Mehr erfahren",
      active: true,
    },
    {
      title: "Drift Kings",
      description: "Erlebe die spektakulärsten Drifts des Jahres.",
      date: "10.12.2024",
      location: "Hamburg",
      imageSrc: "/drift.jpg",
      href: "/",
      btnTitle: "Mehr erfahren",
      active: false,
    },
  ];

  return (
    <section className="w-full min-h-screen px-0 py-24 md:px-12 relative z-50 overflow-x-clip">
      <div className="mb-12 md:mb-40 px-6">
        <h1 className="font-saphifen leading-[0.8] text-[15vw] md:text-[10vw] mb-4 md:mb-16 xl:mb-32 -rotate-3 md:-rotate-6 text-green-500">
          Erlebe Monster
          <br /> Energy hautnah
        </h1>
        <p className="text-3xl md:text-5xl font-bebasNeue">
          sei bei unseren exklusiven Events dabei.
        </p>
      </div>
      <Swiper
        className="!overflow-visible"
        spaceBetween={20} // Reduced default space for smaller devices
        slidesPerView={1.2} // Default for smallest screens
        centeredSlides
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        loop
        breakpoints={{
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventItem {...event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
