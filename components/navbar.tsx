"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-2 backdrop-opacity-30 backdrop-invert bg-white border z-30 fixed top-0 w-full  lg:px-16 px-4 flex  items-center justify-between">
      <Image
        className=""
        width={220}
        height={150}
        src="/comp23.png"
        alt="logo"
      />
      {/* <h1 className="font-bold text-xl lg:text-2xl">AaaStaircaseRailings</h1> */}
      <ul className="hidden lg:flex md:flex space-x-6 items-center">
        <Link
          href="#home"
          className="cursor-pointer text-sm hover:text-accent transition"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="cursor-pointer text-sm hover:text-accent transition"
        >
          About us
        </Link>
        <Link
          href="#gallery"
          className="cursor-pointer text-sm hover:text-accent transition"
        >
          Gallery
        </Link>

        <Link
          href="#contact"
          className="cursor-pointer text-sm hover:text-accent transition"
        >
          Contact
        </Link>
      </ul>
      <svg
        onClick={() => setOpen(true)}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lg:hidden md:hidden lucide lucide-menu"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <a className="hidden lg:flex" href="tel:949-659-9463">
        <button className="hidden md:flex lg:flex items-center gap-2 bg-accent px-4 py-2 rounded-md text-background hover:bg-accent-hover transition">
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
          949-659-9463
        </button>
      </a>
      {open && (
        <div className="fixed z-20  bg-background border flex justify-end shadow top-0 right-0 h-screen w-3/4">
          <div className="relative items-center gap-8 flex flex-col justify-center w-full">
            <svg
              onClick={() => setOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-Linejoin="round"
              className="lucide absolute top-3 right-3 lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <ul className="space-y-8 flex flex-col">
              <Link
                onClick={() => setOpen(false)}
                href="#about"
                className=" font-medium"
              >
                About us
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#gallery"
                className=" font-medium"
              >
                Gallery
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#reviews"
                className=" font-medium"
              >
                Reviews
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#reviews"
                className=" font-medium"
              >
                Contact
              </Link>
            </ul>
            <a href="tel:949-659-9463">
              <button className="items-center flex gap-2 bg-accent px-4 py-2 rounded-md text-background hover:bg-accent/80 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-Linejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                949-659-9463
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
