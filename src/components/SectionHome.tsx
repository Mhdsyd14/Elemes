import Image from "next/image";

export default function SectionHome() {
  return (
    <div className="relative mt-12">
      <div className="absolute inset-0 bg-[url('/assets/background.svg')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center z-10">
        <div className="mr-4 md:ml-5">
          <h1 className="text-3xl font-medium text-[#8BAC3E] sm:text-5xl">
            Good Food Us <br />
            Good Mood
          </h1>
          <div className="flex items-center justify-center sm:hidden">
            <Image
              src="/assets/makanan.svg"
              width={350}
              height={50}
              alt="makanan"
              priority
            />
          </div>
          <h1 className="mt-4 text-[#757575] font">
            I would think that conserving our natural resources <br /> should be
            a conservative position: Not to waste food, and <br />
            not to throw away a lot of the food that we buy
          </h1>
          <div className="flex gap-3 mt-5">
            <button className="rounded-4xl text-white bg-[#8BAC3E] p-3 font-medium">
              Daftar Sekarang
            </button>
            <button className="rounded-3xl text-black bg-[#F2F2F2] p-3 font-medium">
              About Us
            </button>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center">
          <Image
            src="/assets/makanan.svg"
            width={350}
            height={50}
            alt="makanan"
            priority
          />
        </div>
      </div>
    </div>
  );
}
