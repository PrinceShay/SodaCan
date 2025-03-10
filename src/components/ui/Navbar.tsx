"use client";
import React, { useRef } from "react";
import LogoGlow from "../LogoGlow";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";

export default function Navbar() {
  const navbarRef = useRef(null);
  const navItems = useRef(null);
  const navLogo = useRef(null);
  const navSocials = useRef(null);

  const { progress } = useProgress();

  const lastScrollY = useRef(0);

  useGSAP(() => {
    const navbar = navbarRef.current;

    if (progress === 100 && navItems.current && navLogo && navSocials) {
      const navAnim = gsap.timeline({ delay: 1 });
      navAnim.from(navItems.current, {
        yPercent: -100,
        opacity: 0,
        ease: "power4.out",
      });
      navAnim.from(
        navLogo.current,
        {
          scale: 1.4,
          opacity: 0,
          ease: "power4.out",
        },
        "<20%",
      );
      navAnim.from(
        navSocials.current,
        {
          scale: 1.4,
          opacity: 0,
          ease: "power4.out",
        },
        "<20%",
      );
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (scrollingDown) {
        gsap.to(navbar, {
          y: -100,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
        });
      } else {
        gsap.to(navbar, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, {});
  return (
    <nav
      ref={navbarRef}
      className="flex justify-between md:grid grid-cols-3 w-full fixed px-4 py-4 md:p-12 z-30"
    >
      <ul
        ref={navItems}
        className="hidden md:flex uppercase font-bebasNeue gap-2 text-2xl"
      >
        <li className="hover:text-green-500 transition-colors ease-out">
          <Link href={"/"}>Produkte</Link>
        </li>
        <li className="hover:text-green-500 transition-colors ease-out">
          <Link href={"/"}>Aktionen</Link>
        </li>
        <li className="hover:text-green-500 transition-colors ease-out">
          <Link href={"/"}>Aktuelles</Link>
        </li>
        <li className="hover:text-green-500 transition-colors ease-out">
          <Link href={"/"}>Über Monster Energy</Link>
        </li>
      </ul>
      <div ref={navLogo} className=" justify-self-center">
        <LogoGlow className="w-14 h-14" />
      </div>
      <ul
        ref={navSocials}
        className="uppercase font-bebasNeue flex gap-2 text-2xl justify-self-end"
      >
        <li className="hover:text-green-500">
          <Link href={"/"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.5999 5.82C15.9165 5.03953 15.5398 4.0374 15.5399 3H12.4499V15.4C12.4266 16.0712 12.1434 16.7071 11.6602 17.1735C11.177 17.6399 10.5315 17.9004 9.85991 17.9C8.43991 17.9 7.25991 16.74 7.25991 15.3C7.25991 13.58 8.91991 12.29 10.6299 12.82V9.66C7.17991 9.2 4.15991 11.88 4.15991 15.3C4.15991 18.63 6.91991 21 9.84991 21C12.9899 21 15.5399 18.45 15.5399 15.3V9.01C16.7929 9.90985 18.2973 10.3926 19.8399 10.39V7.3C19.8399 7.3 17.9599 7.39 16.5999 5.82Z" />
            </svg>
          </Link>
        </li>

        <li className="hover:text-green-500">
          <Link href={"/"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" />
            </svg>
          </Link>
        </li>

        <li className="hover:text-green-500">
          <Link href={"/"}>
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
            </svg>
          </Link>
        </li>

        <li className="hover:text-green-500">
          <Link href={"/"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
