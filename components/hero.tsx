import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="flex h-[calc(100vh-90px)] mt-10 flex-col items-center ">
      <h1 className="text-center lg:text-4xl text-3xl mb-16 font-bold">
        From Concept <span className="text-accent">Design</span> to{" "}
        <span className="text-accent">Installation</span>
      </h1>
      <section className="flex lg:flex-row flex-col-reverse justify-between w-full">
        <div className="space-y-4">
          <p className="lg:w-3/4 leading-8 text-lg tracking-wide">
            Design, production, delivery, installation for floating and curved
            stairs and custom stair designs.
          </p>

          <button className="items-center flex gap-2 bg-accent px-4 py-3 rounded-md text-primary hover:bg-accent/80 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Free Consultation
          </button>
        </div>

        <div className="w-full">
          <Image
            className="object-cover w-full lg:h-5/6 lg:pb-0 pb-10"
            src="/staircase1.jpg"
            alt="hero img"
            width={2000}
            height={1800}
          />
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FD665E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide animate-pulse mt-20 lucide-chevrons-down"
      >
        <path d="m7 6 5 5 5-5" />
        <path d="m7 13 5 5 5-5" />
      </svg>
    </main>
  );
};

export default Hero;
