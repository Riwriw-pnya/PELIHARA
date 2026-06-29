export default function Pricing() {
  return (
    <section className="
      py-32 px-10
      bg-[#dff6e7]
    ">
      <h2 className="
        text-5xl font-bold
        text-center mb-20
      ">
        Paket Harga
      </h2>

      <div className="
        max-w-md mx-auto
        bg-white rounded-3xl
        p-12 shadow-2xl
      ">
        <h3 className="text-3xl font-bold">
          Premium
        </h3>

        <h1 className="
          text-5xl font-black
          mt-6 text-green-700
        ">
          Rp1.799.000
        </h1>

        <button className="
          mt-10 w-full py-4
          rounded-xl
          bg-green-700
          text-white
        ">
          Berlangganan
        </button>
      </div>
    </section>
  );
}