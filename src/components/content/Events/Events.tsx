"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import EventItem from "./EventItem";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/mousewheel";

export default function Events() {
  const eventSection = useRef(null);
  const eventHeadline = useRef<HTMLHeadingElement>(null);
  const eventText = useRef<HTMLParagraphElement>(null);
  const eventItem = useRef();

  gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(
    () => {
      if (eventHeadline.current && eventText.current) {
        // Split headline
        const headline = SplitType.create(eventHeadline.current, {
          types: "words,chars",
        });

        // Split paragraph - fix the target element
        const paragraph = SplitType.create(eventText.current, {
          types: "words,chars",
        });

        // Animate headline
        gsap.from(eventHeadline.current.querySelectorAll(".char"), {
          opacity: 0,
          stagger: 0.03,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: eventHeadline.current,
            start: "top 90%",
          },
        });

        // Animate paragraph
        gsap.from(eventText.current.querySelectorAll(".char"), {
          opacity: 0,
          stagger: { each: 0.02, from: "random" },
          duration: 0.6,
          color: "green",
          ease: "power4.out",
          scrollTrigger: {
            trigger: eventText.current,
            start: "top bottom",
          },
        });
      }
    },
    { scope: eventSection, dependencies: [eventHeadline, eventText] },
  );

  useGSAP(
    () => {
      gsap.from(".swiper-slide", {
        yPercent: 66,
        opacity: 0,
        filter: "blur(30px)",
        stagger: {
          each: 0.2,
          from: "start",
        },
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".event-swiper",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: eventSection },
  );

  return (
    <section
      ref={eventSection}
      className="w-full min-h-screen px-0 py-24 md:px-12 relative z-50 overflow-x-clip"
    >
      <div className="mb-24 md:mb-64 px-6 text-center">
        <h1
          ref={eventHeadline}
          className="font-saphifen leading-[0.8] text-[15vw] md:text-[10vw] mb-4 md:mb-16 xl:mb-32 -rotate-3 md:-rotate-6 text-green-500"
        >
          Erlebe Monster
          <br /> Energy hautnah
        </h1>
        <p ref={eventText} className="text-3xl md:text-5xl font-bebasNeue">
          sei bei unseren exklusiven Events dabei.
        </p>
      </div>
      <Swiper
        className="!overflow-visible event-swiper"
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
            spaceBetween: 50,
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
