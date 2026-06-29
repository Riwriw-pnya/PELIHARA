import {
  Stethoscope,
  PawPrint,
  HeartHandshake,
} from "lucide-react";

export default function Product() {
  return (
    <section
  className="
    py-32
    relative z-10
    bg-gradient-to-b
    from-[#e8f7ed]
    to-[#e5f4eb]
  "
>
      <h2 className="text-5xl font-bold text-center mb-5">
        Produk Kami
      </h2>

      <p className="text-center text-gray-500 mb-20">
        Solusi digital untuk klinik, peternakan, dan pemilik hewan.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <Card
          icon={<Stethoscope size={40} />}
          title="SiMitra Pelihara"
          desc="Sistem manajemen klinik hewan untuk administrasi, rekam medis, dan pelayanan pasien."
        />

        <Card
          icon={<PawPrint size={40} />}
          title="SiTernak Pelihara"
          desc="Membantu peternak memantau kesehatan, populasi, dan produktivitas ternak."
        />

        <Card
          icon={<HeartHandshake size={40} />}
          title="Peliharaku"
          desc="Aplikasi pemilik hewan untuk konsultasi, riwayat kesehatan, dan pengingat vaksin."
        />
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="
      bg-white
      p-10
      rounded-3xl
      shadow-lg
      border
      hover:-translate-y-2
      transition
    ">
      <div className="text-green-700 mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600">
        {desc}
      </p>
    </div>
  );
}