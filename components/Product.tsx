import Image from "next/image";

export default function Product() {
  return (
    <section
      id="product"
      className="
        min-h-screen  
        flex items-center
        px-16
        bg-white/30
        backdrop-blur-sm
      "
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Kiri */}
        <div id="simitra">
          <h3 className="
            text-5xl
            font-bold
            text-[#006B63]
            mb-10
            mt-30
          ">
            SiMitra Pelihara
          </h3>

          <p className="
            text-xl
            text-gray-900
            leading-relaxed
            mb-7
          ">
            SiMitra hadir sebagai solusi digital yang dirancang khusus untuk
            membuat operasional klinik hewan menjadi jauh lebih
            <span className="font-bold text-[#006B63]">
              {" "}efisien.
            </span>
          </p>

          <p className="
            text-xl
            text-gray-900
            leading-relaxed
            mb-12
          ">
            Bangunlah klinik yang lebih teratur, efisien, dan siap
            <span className="font-bold text-[#006B63]">
              {" "}berkembang
            </span>
            {" "}bersama software manajemen yang tumbuh bersama praktik
            profesional Anda oleh Pelihara.
          </p>

          <button
            className="
              text-[#006B63]
              text-2xl
              font-semibold
              hover:translate-x-2
              transition
              mb-15
            "
          >
            <a href="#simitra">View Details →</a>
          </button>
        </div>

        {/* Kanan */}
        <div className="flex justify-center">
          <Image
            src="/petvet.png"
            alt="SiMitra Pelihara"
            width={650}
            height={450}
            className="
              object-contain
              rounded-[40px]
            "
          />
        </div>

        {/*--------- SI TERNAK -----------*/}

        {/* Kiri */}
        <div id="siternak">
          <h3 className="
            text-5xl
            font-bold
            text-[#006B63]
            mb-10
            mt-30
          ">
            SiTernak Pelihara
          </h3>

          <p className="
            text-xl
            text-gray-900
            leading-relaxed
            mb-7
          ">
            Dapatkan dashboard terpadu dan otomatisasi data untuk membantu pengambil keputusan memantau performa secara
            <span className="font-bold text-[#006B63]">
              {" "}real-time.
            </span>
          </p>

          <p className="
            text-xl
            text-gray-900
            leading-relaxed
            mb-12
          ">
            Tingkatkan
            <span className="font-bold text-[#006B63]">
              {" "}efisiensi, kontrol,
            </span>
            {" "}dan
            <span className="font-bold text-[#006B63]">
              {" "}produktivitas
            </span>
            {" "}dengan
            <span className="font-bold text-[#006B63]">
              {" "}SiTernak
            </span>
            {" "}sistem ERP dari Pelihara yang tumbuh bersama bisnis Anda.
          </p>

          <button
            className="
              text-gray-500
              text-xl
              font-semibold
              hover:translate-x-2
              transition
            "
          >
            Coming Soon →
          </button>
        </div>

        {/* Kanan */}
        <div className="flex justify-center">
          <Image
            src="/peternakan.jpg"
            alt="SiMitra Pelihara"
            width={650}
            height={450}
            className="
              object-contain
              rounded-[40px]
            "
          />
        </div>

        {/*--------- PELIHARA KU -----------*/}

        {/* Kiri */}
        <div id="peliharaku">
          <h3 className="
            text-5xl
            font-bold
            text-[#006B63]
            mb-10
            mt-30
          ">
            PeliharaKu
          </h3>

          <p className="
            text-xl
            text-gray-900
            leading-relaxed
            mb-7
          ">
            PeliharaKu hadir untuk menyatukan semua kebutuhan pemilik hewan dalam satu aplikasi gaya hidup yang 
            <span className="font-bold text-[#006B63]">
              {" "}terintegrasi.
            </span>
          </p>

          <p className="
            text-xl
            text-gray-900
            leading-relaxed
            mb-12
          ">
            Aplikasi ini  
            <span className="font-bold text-[#006B63]">
              {" "}memudahkan 
            </span>
            {" "}pemilik hewan untuk memesan layanan klinik, mengakses rekam medis, hingga membeli produk
            <span className="font-bold text-[#006B63]">
              {" "}kebutuhan hewan.
            </span>
            {" "}dengan
            <span className="font-bold text-[#006B63]">
              {" "}SiTernak
            </span>
            {" "}sistem ERP dari Pelihara yang tumbuh bersama bisnis Anda.
          </p>

          <button
            className="
              text-[#006B63]
              text-2xl
              font-semibold
              hover:translate-x-2
              transition
              mb-20
            "
          >
            <a href="#peliharaku">View Details →</a>
          </button>
        </div>

        {/* Kanan */}
        <div className="flex justify-center">
          <Image
            src="/pet.jpg"
            alt="SiMitra Pelihara"
            width={650}
            height={450}
            className="
              object-contain
              rounded-[40px]
            "
          />
        </div>

      </div>
    </section>
  );
}