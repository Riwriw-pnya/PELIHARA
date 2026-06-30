import Image from "next/image";
import { PawPrint, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-b
        from-[#edf9f1]
        to-[#e8f7ed]
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* Text */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-black text-black">
            About{" "}
            <span className="text-[#1E7A4D]">
              Pelihara
            </span>
          </h2>

          <p className="mt-8 text-lg lg:text-xl leading-relaxed text-gray-700">
            <span className="font-bold text-[#1E7A4D]">
              Pelihara
            </span>{" "}
            adalah solusi digital yang dirancang khusus untuk membantu
            klinik hewan dalam mengelola operasional secara efisien.
          </p>

          <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-700">
            Dengan fitur yang dapat disesuaikan sesuai kebutuhan klinik,
            Pelihara memastikan proses manajemen menjadi lebih{" "}
            <span className="font-bold text-[#1E7A4D]">
              mudah, cepat, dan terorganisir.
            </span>
          </p>
        </div>

        {/* Foto */}
        <div className="relative flex justify-center">

          {/* Bingkai belakang */}
          <div
            className="
              absolute
              top-6
              left-6
              w-[520px]
              h-[380px]
              rounded-[40px]
              border-4
              border-green-700
              rotate-[-5deg]
              z-0
            "
          />

          {/* Glow */}
          <div
            className="
              absolute
              w-[500px]
              h-[350px]
              rounded-full
              bg-green-400/20
              blur-3xl
              z-0
            "
          />

          {/* Card foto */}
          <div
            className="
              relative
              bg-white
              p-4
              rounded-[40px]
              shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              z-10
            "
          >
            <Image
              src="/about-us.jpeg"
              alt="About Pelihara"
              width={550}
              height={400}
              className="
                rounded-[30px]
                object-cover
              "
            />
          </div>

          {/* Paw icon */}
          <div
            className="
              absolute
              top-4
              right-2
              w-20
              h-20
              rounded-full
              bg-green-700
              border-4
              border-white
              flex
              items-center
              justify-center
              shadow-lg
              z-20
            "
          >
            <PawPrint
              size={32}
              className="text-white"
            />
          </div>

          {/* Heart icon */}
          <div
            className="
              absolute
              bottom-2
              left-4
              w-16
              h-16
              rounded-full
              bg-green-500
              border-4
              border-white
              flex
              items-center
              justify-center
              shadow-lg
              z-20
            "
          >
            <Heart
              size={24}
              fill="white"
              className="text-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
}