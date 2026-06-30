"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      z-10
      min-h-screen
      pt-32
      flex items-center
      px-10
    "
    id="home"
>
      <div className="
        max-w-5xl mx-auto
        grid md:grid-cols-2
        gap-16 items-center
      ">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="
            text-6xl font-black
            text-green-950
            leading-tight
          ">
            Solusi Modern
            <br />
            Klinik Hewan
          </h1>

          <p className="
            mt-8 text-xl
            text-gray-600
          ">
            Kelola klinik hewan lebih mudah,
            cepat, dan profesional.
          </p>

          <button className="
            mt-10 px-8 py-4
            rounded-2xl
            bg-[#408A71]
            text-white
            hover:scale-105
            transition
          ">
            Mulai Sekarang
          </button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="/pet.jpg"
          className="
            rounded-[40px]
            shadow-2xl
          "
        />
      </div>
    </section>
  );
}