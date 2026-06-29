export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-8 bg-[#e8f8ee]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-5">
          Paket Harga
        </h2>

        <p className="text-center text-gray-600 mb-20">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Starter */}
          <div
            className="
              relative
              bg-white
              rounded-[35px]
              p-10
              border border-green-200
              shadow-md

              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(22,101,52,0.15)]
              hover:border-[#466953]

              transition-all
              duration-300
            "
          >
            <h3 className="text-xl font-semibold text-gray-500">
              Starter
            </h3>

            <h1 className="text-5xl font-black mt-5 text-[#466953]">
              Gratis
            </h1>

            <p className="mt-2 text-gray-500">
              Untuk klinik kecil.
            </p>

            <hr className="my-8" />

            <ul className="space-y-4 text-gray-700">
              <li>✓ 1 pengguna</li>
              <li>✓ Dashboard dasar</li>
              <li>✓ Data terbatas</li>
              <li>✓ Support email</li>
            </ul>

            <button
              className="
                mt-10 w-full py-4
                rounded-xl
                border-2 border-[#466953]
                text-[#466953]
                font-semibold
                hover:bg-[#466953]
                hover:text-white
                transition
              "
            >
              Mulai Gratis
            </button>
          </div>

          {/* Premium */}
          <div
            className="
              relative
              bg-white
              rounded-[35px]
              p-10
              border-2 border-[#466953]
              shadow-lg

              hover:-translate-y-2
              hover:shadow-[0_30px_70px_rgba(22,101,52,0.18)]

              transition-all
              duration-300
            "
          >
            {/* Badge */}
            <div
              className="
                absolute top-0 right-0
                bg-gradient-to-br
                from-[#4ade80]
                via-[#22c55e]
                to-[#166534]

                text-white
                px-8 py-5

                rounded-bl-3xl
                rounded-tr-[35px]

                text-center
                shadow-[0_10px_25px_rgba(34,197,94,0.35)]

                overflow-hidden
              "
            >
              <div
                className="
                  absolute top-0 left-0
                  w-full h-full
                  bg-gradient-to-r
                  from-white/30
                  to-transparent
                  rotate-12
                  translate-x-10
                  -translate-y-8
                "
              />

              <p className="relative text-sm font-medium">
                Hemat
              </p>

              <h3 className="relative text-3xl font-black">
                25%
              </h3>
            </div>

            <p className="text-yellow-500 font-medium">
              ★ Recommended
            </p>

            <p className="mt-5 text-gray-500">
              Tahunan
            </p>

            <h3 className="text-3xl font-bold text-[#466953] mt-2">
              SiMitra Pet Clinic
            </h3>

            <h1 className="text-5xl font-black mt-6">
              Rp1.799.000
            </h1>

            <p className="font-semibold mt-2">
              / tahun
            </p>

            <div
              className="
                mt-5
                inline-block
                px-5 py-2
                rounded-full
                bg-green-100
                text-green-700
                text-sm
              "
            >
              Rp149.000/bulan • Hemat 25%
            </div>

            <hr className="my-8 border-gray-300" />

            <ul className="space-y-4 text-gray-700">
              <li>✓ Appointment & Kalender</li>
              <li>✓ Sales & Billing</li>
              <li>✓ Manajemen Inventaris</li>
              <li>✓ Rekam Medis</li>
              <li>✓ Laporan & Analitik</li>
              <li>✓ Multi User</li>
              <li>✓ Integrasi WhatsApp</li>
              <li>✓ Akses Semua Device</li>
            </ul>

            <button
              className="
                mt-10 w-full py-4
                rounded-xl
                bg-[#466953]
                text-white
                font-semibold
                hover:bg-[#385543]
                transition
              "
            >
              Mulai Sekarang
            </button>

            <button
              className="
                mt-4 w-full py-4
                rounded-xl
                border-2 border-gray-300
                text-gray-700
                hover:border-[#466953]
                hover:text-[#466953]
                transition
              "
            >
              Jadwalkan Demo
            </button>
          </div>

          {/* Enterprise */}
          <div
            className="
              relative
              bg-white
              rounded-[35px]
              p-10
              border border-green-200
              shadow-md

              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(22,101,52,0.15)]
              hover:border-[#466953]

              transition-all
              duration-300
            "
          >
            <h3 className="text-xl font-semibold text-gray-500">
              Enterprise
            </h3>

            <h1 className="text-5xl font-black mt-5 text-[#466953]">
              Custom
            </h1>

            <p className="mt-2 text-gray-500">
              Untuk perusahaan besar.
            </p>

            <hr className="my-8" />

            <ul className="space-y-4 text-gray-700">
              <li>✓ Pengguna tanpa batas</li>
              <li>✓ Integrasi khusus</li>
              <li>✓ Server dedicated</li>
              <li>✓ Training tim</li>
              <li>✓ Prioritas support</li>
            </ul>

            <button
              className="
                mt-10 w-full py-4
                rounded-xl
                border-2 border-[#466953]
                text-[#466953]
                font-semibold
                hover:bg-[#466953]
                hover:text-white
                transition
              "
            >
              Hubungi Kami
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}