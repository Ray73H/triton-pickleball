"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 h-16 bg-black transition flex justify-between items-center py-2 px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo.webp"
          alt="Weather Logo"
          width={45}
          height={50}
          className="object-contain rounded-xl"
        />
        <p className="text-xl font-semibold text-white">Triton Pickleball</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <div className="flex gap-4 md:gap-6 items-center text-white text-lg">
          <Link href="/about" className="hover:text-gray-700">
            About Us
          </Link>
          <Link href="/schedule" className="hover:text-gray-700">
            Schedule/Events
          </Link>
          <Link href="/gallery" className="hover:text-gray-700">
            Gallery
          </Link>
          <Link href="/sponsors" className="hover:text-gray-700">
            Sponsors
          </Link>
          <button onClick={handleContactClick} className="hover:text-gray-700">
            Contact
          </button>
          <Link href="/join">
            <button className="bg-white text-black hover:bg-gray-300 px-4 py-2 rounded-full h-8 flex items-center justify-center">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
