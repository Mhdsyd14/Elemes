"use client";

import Image from "next/image";
import { useState } from "react";
import { dummyscategory } from "@/dummy/data";

export default function CategoryReceipt() {
  const colors = ["#F0FEEB", "#E4F2F4", "#EAEEFA", "#F9EEF3", "#F3F7D9"];
  const itemsPerPage = 5;
  const [pageIndex, setPageIndex] = useState(0);

  const maxPage = Math.ceil(dummyscategory.length / itemsPerPage) - 1;

  const handleNext = () => {
    if (pageIndex < maxPage) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="p-5">
      <h1 className="ml-4 text-2xl font-medium sm:ml-8">
        Browse Our Category <br />
        <span className="text-[#8BAC3E]">Receipt</span>
      </h1>

      <div className="sm:hidden overflow-x-auto scrollbar-hide mt-6 ml-4">
        <div className="flex flex-nowrap gap-3 px-1">
          {dummyscategory.map((item, index) => (
            <div
              key={index}
              className="group rounded-4xl flex-shrink-0 flex flex-col items-center justify-center w-52 h-44 transform transition duration-300 hover:scale-105 relative overflow-hidden hover:h-48"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/background.svg")' }}
              />
              <Image
                src={item.picture}
                width={50}
                height={50}
                alt={item.name}
                priority
                className="z-10"
              />
              <div className="mt-5 text-center z-10">
                <h1 className="font-medium">{item.name}</h1>
                <h1>{item.items}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:block overflow-hidden mt-6 ml-8 relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${pageIndex * (220 * itemsPerPage)}px)`,
          }}
        >
          {dummyscategory.map((item, index) => (
            <div
              key={index}
              className="group rounded-4xl flex-shrink-0 flex flex-col items-center justify-center w-52 h-44 mr-3 transform transition duration-300 hover:scale-105 relative overflow-hidden hover:h-48"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/background.svg")' }}
              />
              <Image
                src={item.picture}
                width={50}
                height={50}
                alt={item.name}
                priority
                className="z-10"
              />
              <div className="mt-5 text-center z-10">
                <h1 className="font-medium">{item.name}</h1>
                <h1>{item.items}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex gap-3 justify-end mt-6 mr-24">
        <button
          onClick={handlePrev}
          disabled={pageIndex === 0}
          className="rounded-3xl bg-[#8BAC3E] text-white p-3 flex flex-row items-center gap-3 disabled:opacity-50"
        >
          <Image src="/assets/prev.svg" width={20} height={20} alt="Prev" />
          PREV
        </button>
        <button
          onClick={handleNext}
          disabled={pageIndex >= maxPage}
          className="rounded-3xl bg-[#8BAC3E] text-white p-3 flex flex-row items-center gap-3 disabled:opacity-50"
        >
          NEXT
          <Image src="/assets/next.svg" width={20} height={20} alt="Next" />
        </button>
      </div>
    </div>
  );
}
