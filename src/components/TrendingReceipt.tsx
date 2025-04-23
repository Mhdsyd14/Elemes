import Image from "next/image";
import { dummystrending } from "@/dummy/data";

export default function TrendingReceipt() {
  const colors = ["#F0FEEB", "#E4F2F4", "#EAEEFA", "#F9EEF3", "#F3F7D9"];

  return (
    <div className="p-5">
      <h1 className="ml-4 text-2xl font-medium sm:ml-8">
        Browse Our Trending <br />
        <span className="text-[#8BAC3E]">Receipt</span>
      </h1>

      <div className="mt-6 mb-28 sm:mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
        {dummystrending.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-2xl w-full h-80 p-4 flex flex-col items-start gap-3 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
              <Image
                src="/assets/background.svg"
                fill
                alt="bg"
                className="object-cover"
              />
            </div>

            <Image
              src={item.picture}
              width={150}
              height={100}
              alt={item.name}
              priority
              className="z-10 rounded-md mt-2"
            />
            <h1 className="z-10 font-bold text-2xl">{item.name}</h1>
            <h1 className="z-10 font-semibold text-[#8BAC3E]">
              {item.subname}
            </h1>

            <div className="z-10 rating">
              {Array.from({ length: 5 }).map((_, i) => {
                const isFilled = i < item.rating;
                const isCurrent = i + 1 === item.rating;
                return (
                  <div
                    key={i}
                    className={`mask mask-star ${
                      isFilled ? "bg-orange-400" : "bg-gray-300"
                    }`}
                    aria-label={`${i + 1} star`}
                    {...(isCurrent && isFilled
                      ? { "aria-current": "true" }
                      : {})}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="sm:mt-5 sm:flex sm:flex-row sm:justify-center hidden">
        <button className="rounded-3xl bg-[#8BAC3E] text-white p-2 font-semibold">
          ALL Receipt
        </button>
      </div>
    </div>
  );
}
