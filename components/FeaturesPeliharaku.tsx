import {
  ClipboardList,
  Monitor,
  Users,
  ShieldCheck,
  RefreshCcw,
  FileText,
} from "lucide-react";

export default function FeaturesPeliharaku() {
    const features = [
    {
        icon: <ClipboardList size={40} />,
        title: "Mudah Kelola Klinik",
        desc: "Semua urusan klinik jadi lebih teratur dan efisien.",
    },
    {
        icon: <Monitor size={40} />,
        title: "Akses di Semua Perangkat",
        desc: "Gunakan Pelihara kapan saja, di mana saja.",
    },
    {
        icon: <Users size={40} />,
        title: "Atur Peran & Akses",
        desc: "Kelola hak akses agar tim bekerja lebih rapi.",
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Keamanan Data Terjamin",
        desc: "Data klinik terlindungi dengan sistem terenkripsi aman.",
    },
    {
        icon: <RefreshCcw size={40} />,
        title: "Migrasi Data Cepat",
        desc: "Pindahkan data lama ke Pelihara dengan mudah.",
    },
    {
        icon: <FileText size={40} />,
        title: "Data Rekam Medis",
        desc: "Riwayat kesehatan pasien tersimpan dengan rapi.",
    },
];

return (
    <section
    className="
        py-24
        bg-[#C7E8CF]
    ">
        <div className="max-w-4xl max-h-xl mx-auto px-6">
        {/* Judul */}
        <h2
        className="
            text-4xl
            font-bold
            text-center
            text-[#003B2F]
            mb-16
        "
        >
        Kemudahan untuk Setiap Klinik
        </h2>

        {/* Card */}
        <div className="grid md:grid-cols-2 gap-8">
            {features.map((item, index) => (
            <div
            key={index}
            className="
                bg-white
                rounded-3xl
                py-10
                px-8
                text-center
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
            "
            >
            <div className="flex justify-center text-green-700 mb-6">
                {item.icon}
            </div>

            <h3
                className="
                text-xl
                font-bold
                text-[#001A33]
                mb-4
                "
            >
                {item.title}
            </h3>

                <p className="text-gray-600 text-md">
                {item.desc}
                </p>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
}