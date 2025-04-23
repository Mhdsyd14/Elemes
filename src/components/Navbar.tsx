"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-4 py-3 flex justify-between items-center z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="ml-2 sm:ml-10">
          <Image
            src="/assets/logo.svg"
            width={150}
            height={50}
            alt="Logo"
            priority
          />
        </div>

        <ul className="hidden sm:flex gap-6 text-gray-500 font-medium">
          <li className="cursor-pointer hover:text-[#8BAC3E] transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#8BAC3E] transition">
            About
          </li>
          <li className="relative cursor-pointer hover:text-[#8BAC3E] transition">
            <span className="absolute -top-4 -right-4 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md animate-pulse">
              HOT
            </span>
            Promotions
          </li>
          <li className="cursor-pointer hover:text-[#8BAC3E] transition">
            Blogs
          </li>
          <li className="cursor-pointer hover:text-[#8BAC3E] transition">
            Contact Us
          </li>
        </ul>

        <div className="flex items-center gap-3 mr-2 sm:mr-10">
          <button className="hidden sm:block font-bold text-gray-800 hover:underline">
            Masuk
          </button>
          <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-full hover:bg-[#76992f] transition text-sm">
            Daftar Sekarang
          </button>
        </div>
      </nav>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-row gap-9 p-3 w-full justify-between bg-white sm:hidden z-50">
        <div className="p-3 flex flex-col items-center w-10 h-20">
          <Image
            src="/assets/hamburger.svg"
            width={70}
            height={50}
            alt="Hamburger Menu"
          />
          <h1 className="text-[#757575]">Home</h1>
        </div>
        <div className="p-3 flex flex-col items-center w-10 h-20">
          <Image
            src="/assets/hamburger.svg"
            width={70}
            height={50}
            alt="Hamburger Menu"
          />
          <h1 className="text-[#757575]">Promotions</h1>
        </div>
        <div className="p-3 flex flex-col items-center w-10 h-20">
          <Image
            src="/assets/hamburger.svg"
            width={70}
            height={50}
            alt="Hamburger Menu"
          />
          <h1 className="text-[#757575]">Other</h1>
        </div>
      </div>
    </>
  );
}
