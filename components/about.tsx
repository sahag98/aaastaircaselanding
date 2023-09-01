import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="relative lg:px-16 px-4 bg-center my-10 flex flex-col gap-5 justify-center items-center w-full py-5 lg:py-40 lg:mb-10"
    >
      <div
        className="absolute bg-no-repeat  bg-cover bg-center inset-0  opacity-40"
        style={{ backgroundImage: "url('/about-img.png')" }}
      />
      <h2 className="text-center z-10 text-secondary mb-0 lg:mb-2 text-3xl font-bold">
        About us
      </h2>
      <div className="flex flex-col shadow-xl lg:w-1/2 z-30 bg-[#ffffff] rounded-md p-5 lg:gap-0 md:gap-0 gap-5 items-center justify-center">
        <p className="tracking-wide text-center lg:leading-8 leading-7 justify-center items-center self-center align-middle">
          We are a custom manufacturer of modern staircases and railings and
          we're born out of a dream to hire quality people to create quality
          products to simplify the modern railing market. We engineer, design,
          manufacturer, pack and ship every item in our own facilities and
          customized designs are also welcomed. We have our own design team to
          help customers develop their ideas into drawings.
        </p>
      </div>
    </div>
  );
};

export default About;
