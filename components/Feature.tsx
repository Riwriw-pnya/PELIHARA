import {
  Shield,
  Monitor,
  Users
} from "lucide-react";

export default function Feature() {
  return (
    <section className="py-32 px-10">
      <h2 className="
        text-5xl font-bold
        text-center mb-20
      ">
        Fitur Utama
      </h2>

      <div className="
        max-w-6xl mx-auto
        grid md:grid-cols-3 gap-8
      ">
        <Card
          icon={<Shield size={40} />}
          title="Keamanan Data"
        />

        <Card
          icon={<Monitor size={40} />}
          title="Dashboard Modern"
        />

        <Card
          icon={<Users size={40} />}
          title="Multi User"
        />
      </div>
    </section>
  );
}

function Card({ icon, title }: any) {
  return (
    <div className="
      bg-white p-10
      rounded-3xl
      shadow-soft
      hover:-translate-y-3
      transition-all
      duration-500
    ">
      <div className="text-green-700">
        {icon}
      </div>

      <h3 className="
        text-2xl font-bold mt-6
      ">
        {title}
      </h3>
    </div>
  );
}