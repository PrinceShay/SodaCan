import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface EventItemProps {
  title: string;
  description: string;
  date: string;
  location: string;
  imageSrc: string;
  href: string;
  active?: boolean;
  btnTitle: string;
}

export default function EventItem({
  title,
  description,
  date,
  location,
  imageSrc,
  href,
  active = true,
  btnTitle,
}: EventItemProps) {
  return (
    <Link className="relative group h-full" href={href}>
      <h1 className="event-headline font-saphifen text-[16vw] md:text-[7vw] absolute -top-7 text-green-500 z-30 leading-[0.75] text-nowrap rotate-[-7deg]">
        {title}
      </h1>
      <div className="event-wrapper aspect-[4/6] md:aspect-[4/5] h-full overflow-clip group-hover:scale-95 transition-transform ease-out duration-300 rounded-md relative">
        {!active ? (
          <div className="w-full p-4 absolute z-30 bg-white bg-opacity-20 text-center font-bebasNeue text-xl lg:text-2xl top-1/3">
            Dieses Event ist leider schon vorbei
          </div>
        ) : null}
        <div className="w-full h-full relative z-10 p-8 flex flex-col justify-end items-start bg-gradient-to-t from-black to-transparent">
          <div className="mb-8 flex flex-col items-start">
            <p className="text-3xl xl:text-5xl font-bebasNeue mb-2">
              {description}
            </p>
            <div className="text-xl font-bebasNeue text-green-500 p-2 backdrop-blur-sm flex flex-row items-center justify-start gap-2">
              <p>{date}</p>
              <div className="h-4 w-[2px] bg-white"></div>
              <p>{location}</p>
            </div>
          </div>

          {/* Button */}
          <div
            className={`w-full flex justify-center items-center gap-2 rounded-md p-4 ${active ? "bg-green-500 group-hover:bg-green-300" : "bg-green-200 group-hover:bg-green-300"} transition-colors ease-out duration-300 text-black font-bebasNeue text-2xl`}
          >
            {active ? btnTitle : "Recap ansehen"}
            <ArrowUpRight size={32} strokeWidth={2} />
          </div>
        </div>
        <Image
          alt={title}
          src={imageSrc}
          fill
          sizes="33vw"
          className={`event-image object-cover group-hover:scale-125 transition-transform ease-out duration-300 ${!active ? "saturate-0" : ""}`}
        />
      </div>
    </Link>
  );
}
