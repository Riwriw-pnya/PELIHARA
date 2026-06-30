export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        z-10
        min-h-screen
        pt-32
        flex items-center
        px-6 lg:px-10
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Text */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-green-950">
            Solusi Cerdas
            <br />
            <span className="text-[#1E7A4D]">
              Manajemen Klinik Hewan
            </span>
          </h1>

          <p
            className="
              mt-8
              text-lg
              lg:text-xl
              text-gray-600
            "
          >
            Kelola klinik hewan lebih mudah,
            cepat, dan profesional.
          </p>

          <button
            className="
              mt-10
              px-8
              py-4
              rounded-2xl
              bg-[#408A71]
              text-white
              hover:bg-[#35745f]
              transition
            "
          >
            Mulai Sekarang
          </button>
        </div>

        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="
              w-full
              max-w-[550px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}