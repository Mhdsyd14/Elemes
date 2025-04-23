import Image from "next/image";

export default function Footer() {
  const icons = [
    { src: "vector", alt: "email" },
    { src: "phone", alt: "phone" },
    { src: "instagram", alt: "instagram" },
  ];

  return (
    <footer>
      <div className="hidden mx-auto justify-between w-[1210px] bg-[#F9FFF6] rounded-md p-7 mb-3 sm:flex flex-row text-[#757575]">
        <div className="ml-5 flex flex-col">
          <Image
            src="/assets/logo.svg"
            width={150}
            height={50}
            alt="Logo"
            priority
          />
          <p className="mt-5 leading-relaxed">
            JL.Prof.DR.Satrio No.7, RT.3/RW.3, Karet Kuningan,
            <br />
            Kecamatan Setiabudi, Kota Jakarta Selatan,
            <br />
            Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex flex-row gap-3 mt-2.5">
            {icons.map((icon) => (
              <div
                key={icon.src}
                className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center group hover:bg-[#8BAC3E] transition-colors duration-200"
              >
                <Image
                  src={`/assets/icon/${icon.src}.svg`}
                  width={24}
                  height={24}
                  alt={icon.alt}
                  priority
                  className="group-hover:invert group-hover:brightness-0 group-hover:contrast-100 transition duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ml-8">
          <h2 className="font-semibold text-xl text-black">Categories</h2>
          <ul className="mt-3 space-y-1">
            <li>Cupcake</li>
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Salmon</li>
            <li>Dougnut</li>
          </ul>
        </div>

        <div className="ml-8">
          <h2 className="font-semibold text-xl text-black">About Us</h2>
          <ul className="mt-3 space-y-1">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Report Problem</li>
          </ul>
        </div>

        <div className="ml-8">
          <h2 className="font-semibold text-xl text-black">Newsletter</h2>
          <div className="mt-3">
            <p>
              Get now free 50% discount for all <br /> products on your first
              order
            </p>

            <div className="flex items-center rounded-md overflow-hidden w-[300px] bg-[#f9fef6] mt-3 border border-black">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 text-black bg-[#f9fef6] focus:outline-none"
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
                <span>elemesid@gmail.com</span>
              </div>
              <div className="flex flex-row gap-1.5 items-center">
                <Image
                  src="/assets/icon/phone.svg"
                  width={24}
                  height={24}
                  alt="phone"
                  priority
                />
                <span>0888 1111 2222</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden p-2 text-[#757575] sm:flex justify-center">
        <p>© 2021 Elemes id. All rights reserved</p>
      </div>
    </footer>
  );
}
