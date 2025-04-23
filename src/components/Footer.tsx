import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="hidden mx-auto justify-between w-[1210px] bg-[#F9FFF6] rounded-md p-7 mb-3 sm:flex flex-row text-[#757575]">
        <div className="ml-5 flex flex-col">
          <Image
            src="/assets/logo.svg"
            width={150}
            height={50}
            alt="Logo"
            priority
          />
          <h1 className="mt-5">
            JL.Prof.DR.Satrio No.7, RT.3/RW.3, Karet Kuningan,
            <br />
            Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
            Daerah Khusus Ibukota Jakarta 12950
          </h1>
          <div className="flex flex-row gap-3 mt-2.5">
            {["vector", "phone", "instagram"].map((icon, index) => (
              <div
                key={index}
                className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center group hover:bg-[#8BAC3E] transition-colors duration-200"
              >
                <Image
                  src={`/assets/icon/${icon}.svg`}
                  width={24}
                  height={24}
                  alt={icon}
                  priority
                  className="group-hover:invert group-hover:brightness-0 group-hover:contrast-100 transition duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ml-8">
          <h1 className="font-semibold text-xl text-black">Categories</h1>
          <div className="mt-3">
            <h1>Cupcake</h1>
            <h1>Pizza</h1>
            <h1>Kebab</h1>
            <h1>Salmon</h1>
            <h1>Dougnut</h1>
          </div>
        </div>

        <div className="ml-8">
          <h1 className="font-semibold text-xl text-black">About Us</h1>
          <div className="mt-3">
            <h1>About Us</h1>
            <h1>FAQ</h1>
            <h1>Report Problem</h1>
          </div>
        </div>

        <div className="ml-8">
          <h1 className="font-semibold text-xl text-black">Newsletter</h1>
          <div className="mt-3">
            <h1>
              Get now free 50% discount for all <br /> products on your first
              order
            </h1>

            <div className="flex items-center rounded-md overflow-hidden w-[300px] bg-[#f9fef6] mt-3 border border-black">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 text-black bg-[#f9fef6] focus:outline-none "
              />
              <button className="bg-[#8BAC3E] text-white font-bold text-center w-16 h-10 rounded-md hover:bg-[#7c9e35] transition flex items-center justify-center">
                SEND
              </button>
            </div>

            <div className="flex flex-col gap-1.5 mt-4">
              <div className="flex flex-row gap-1.5 items-center">
                <Image
                  src="/assets/icon/vector.svg"
                  width={24}
                  height={24}
                  alt="email"
                  priority
                />
                <h1>elemesid@gmail.com</h1>
              </div>
              <div className="flex flex-row gap-1.5 items-center">
                <Image
                  src="/assets/icon/phone.svg"
                  width={24}
                  height={24}
                  alt="phone"
                  priority
                />
                <h1>0888 1111 2222</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden p-2 text-[#757575] sm:flex justify-center">
        <h1>© 2021 Elemes id. All rights reserved</h1>
      </div>
    </>
  );
}
