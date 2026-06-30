

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        bg-white/30
        backdrop-blur-sm
        flex items-center
        py-24
        px-10
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* Kiri */}
        <div>
          <h2
            className="
              text-4xl
              font-bold
              text-[#005B4A]
              mb-8
            "
          >
            Contact Us
          </h2>

          <p
            className="
              text-xl
              text-gray-700
              leading-relaxed
              max-w-xl
            "
          >
            Butuh bantuan? Sampaikan pesan Anda di sini.
            Kami berkomitmen untuk memberikan layanan terbaik
            dan siap membantu kebutuhan Anda kapan saja.
          </p>
        </div>

        {/* Kanan */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Nama
            </label>

            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="
                w-full
                px-5 py-4
                border border-gray-300
                rounded-lg
                outline-none
                focus:border-green-600
              "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              No. Telepon
            </label>

            <input
              type="text"
              placeholder="08xxxxxxxxxx"
              className="
                w-full
                px-5 py-4
                border border-gray-300
                rounded-lg
                outline-none
                focus:border-green-600
              "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Email
            </label>

            <input
              type="email"
              placeholder="email@contoh.com"
              className="
                w-full
                px-5 py-4
                border border-gray-300
                rounded-lg
                outline-none
                focus:border-green-600
              "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Pesan Anda
            </label>

            <textarea
              rows={5}
              placeholder="Tulis pesan Anda di sini..."
              className="
                w-full
                px-5 py-4
                border border-gray-300
                rounded-lg
                outline-none
                resize-none
                focus:border-green-600
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-lg
              bg-[#16853A]
              text-white
              font-semibold
              text-lg
              hover:bg-[#136E31]
              transition
            "
          >
            Kirim Pesan
          </button>
        </form>

      </div>
    </section>
  );
}