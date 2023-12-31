import Image from "next/image";
import React from "react";
import AnimatedTextWord from "./AnimatedTextWord";
import Link from "next/link";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex z-20  h-screen lg:px-16 px-4 flex-col items-center justify-center"
    >
      <section className="flex lg:flex-row mt-5 flex-col-reverse justify-between items-center w-full">
        <div className="space-y-2 lg:space-y-6">
          <AnimatedTextWord text="From Concept Design to Installation" />

          <p className="lg:w-4/5 leading-8 lg:text-lg tracking-wide">
            Design, production, delivery, installation for floating and curved
            stairs and custom stair designs.
          </p>
          <section className="flex items-center flex-col lg:flex-row gap-3">
            <a
              href="tel:949-659-9463"
              className="items-center cursor-pointer md:w-1/2 w-full justify-center flex gap-2 bg-accent px-4 py-3 rounded-md text-background hover:bg-accent-hover transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Free Consultation
            </a>

            <Link
              href="#about"
              className="items-center  lg:w-1/3 w-full md:w-1/2 justify-center flex gap-2 border px-4 py-3 rounded-md bg-[#eef7fe] hover:bg-[#deeffe] transition-all text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Who are we?
            </Link>
          </section>
        </div>

        <div className="w-full shadow-xl mb-2 sm:h-[500px] md:h-[500px] lg:h-[700px] md">
          <Image
            className="object-cover rounded-sm w-full lg:h-[700px] h-full lg:pb-0"
            src="/staircase1.jpg"
            alt="hero img"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <div className="absolute bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FD665E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide animate-pulse mt-5 lucide-chevrons-down"
        >
          <path d="m7 6 5 5 5-5" />
          <path d="m7 13 5 5 5-5" />
        </svg>
      </div>
    </main>
  );
};

export default Hero;
