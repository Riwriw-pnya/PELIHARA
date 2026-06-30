import Image from "next/image";

export default function About() {
  return (
    <section
  className="
    py-32
    relative z-10
    bg-gradient-to-b
    from-[#edf9f1]
    to-[#e8f7ed]
  "
>
      {/* Dekorasi kiri bawah */}
      <div
        className="
          absolute
          bottom-20
          -left-20
          w-72 h-24
          border-2 border-green-500
          rounded-full
          opacity-50
        "
      />

      {/* Dekorasi kanan */}
      <div
        className="
          absolute
          top-32
          -right-20
          w-56 h-24
          border-2 border-green-500
          rounded-full
          opacity-50
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-10
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* Text */}
        <div>
          <h2 className="text-6xl font-black text-black">
            About{" "}
            <span className="text-green-700">
              Pelihara
            </span>
          </h2>

          <p className="mt-10 text-2xl leading-relaxed text-gray-800">
            <span className="font-bold text-green-800">
              Pelihara
            </span>{" "}
            adalah solusi digital yang dirancang khusus untuk{" "}
            <span className="font-bold text-green-800">
              membantu klinik hewan
            </span>{" "}
            dalam mengelola operasional secara efisien.
          </p>

          <p className="mt-8 text-2xl leading-relaxed text-gray-800">
            Dengan fitur yang dapat disesuaikan sesuai kebutuhan klinik,
            Pelihara memastikan proses manajemen menjadi lebih{" "}
            <span className="font-bold text-green-800">
              mudah, cepat, dan terorganisir.
            </span>
          </p>
        </div>

        {/* Gambar */}
        <div className="flex justify-center">
          <Image
            src="/about-us.jpeg"
            alt="About Pelihara"
            width={550}
            height={400}
            className="
              rounded-[40px]
              shadow-[0_20px_40px_rgba(0,0,0,0.15)]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}