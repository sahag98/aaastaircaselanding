import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="lg:px-16 px-4">
      <h2 className="text-center text-secondary mb-0 lg:mb-2 text-3xl font-bold">
        Project Gallery
      </h2>
      <p className="lg:text-center text-center my-5 text-sm font-medium lg:text-lg lg:mb-10">
        Here are some of the projects we have done so far
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-5">
        <Image
          className="lg:w-1/2 rounded-sm"
          src="/gallery1.jpg"
          alt="1st image"
          width={2000}
          height={1000}
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Professional Elegant Safety Arc/Helical Marble Staircase Steel Glass
            Stairs Curved Staircase
          </h3>
          <p className="leading-8">
            The beautiful and complex curved staircase is considered the
            pinnacle of staircase craftsmanship. Our professional team has rich
            experience, ability and skills, and can provide the highest quality
            service from inspiration to installation. The well-designed curved
            staircase provides more than just its functional purpose. In fact,
            the staircase is an integral part of the design, a focal point, and
            is usually the first piece of furniture that guests see.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col  mt-10 lg:mt-20 lg:gap-10 gap-5">
        <Image
          className="lg:w-1/2 rounded-sm"
          src="/gallery2.jpg"
          alt="1st image"
          width={2000}
          height={1000}
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Factory Best Selling Stainless Steel Indoor Stair Railings Glass
            Circular Staircase
          </h3>
          <p className="leading-8">
            The beautiful and complex curved staircase is considered the
            pinnacle of staircase craftsmanship. Our professional team has rich
            experience, ability and skills, and can provide the highest quality
            service from inspiration to installation. The well-designed curved
            staircase provides more than just its functional purpose. In fact,
            the staircase is an integral part of the design, a focal point, and
            is usually the first piece of furniture that guests see.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-5  mt-10 lg:mt-20">
        <Image
          className="lg:w-1/2 rounded-sm"
          src="/gallery3.jpg"
          alt="1st image"
          width={2000}
          height={1000}
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Super Luxury Powder Coating Carbon Steel Beam Curved Stairs For
            Villa/Apartment
          </h3>
          <p className="leading-8">
            The beautiful and complex curved staircase is considered the
            pinnacle of staircase craftsmanship. Our professional team has rich
            experience, ability and skills, and can provide the highest quality
            service from inspiration to installation. The well-designed curved
            staircase provides more than just its functional purpose. In fact,
            the staircase is an integral part of the design, a focal point, and
            is usually the first piece of furniture that guests see.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse  mt-10 lg:mt-20 lg:gap-10 gap-5">
        <Image
          className="lg:w-1/2 rounded-sm"
          src="/gallery4.jpg"
          alt="1st image"
          width={2000}
          height={1000}
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Glass Handrail Curved Staircases For House Space Saving
          </h3>
          <p className="leading-8">
            The beautiful and complex curved staircase is considered the
            pinnacle of staircase craftsmanship. Our professional team has rich
            experience, ability and skills, and can provide the highest quality
            service from inspiration to installation. The well-designed curved
            staircase provides more than just its functional purpose. In fact,
            the staircase is an integral part of the design, a focal point, and
            is usually the first piece of furniture that guests see.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
