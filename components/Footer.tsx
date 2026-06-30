import Image from "next/image";
import {
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <section
        className="relative py-28 text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/petvet.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-green-900/50"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold leading-tight">
            Investasikan waktu Anda untuk membuat
            manajemen klinik lebih efisien bersama
            Pelihara.
          </h2>

          <button className="mt-10 bg-white text-green-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition">
            Jadwalkan Demo Sekarang
          </button>
        </div>
      </section>

      <div className="bg-white py-16 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          <div>
            <Image
              src="/pelihara-logo.png"
              alt="Pelihara"
              width={180}
              height={80}
            />

            <p className="mt-6 text-gray-600 leading-8">
              Jl. Sumarsana No.30,
              Kecamatan Sumur Bandung,
              Kota Bandung,
              Jawa Barat 40113
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5 text-gray-600">
              <div className="flex gap-3">
                <Mail size={20} />
                halo@pelihara.co
              </div>

              <div className="flex gap-3">
                <Phone size={20} />
                +62831-8005-3603
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-6">
              Products
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>SiMitra Pelihara</p>
              <p>SiTernak Pelihara</p>
              <p>PeliharaKu</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-6">
              Pelihara
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>About Us</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#408A71] text-white py-3 px-10">
        <div className="max-w-7xl mx-auto flex justify-between">
          <p>Copyright ©2025 Pelihara</p>

          <div className="flex gap-6">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}