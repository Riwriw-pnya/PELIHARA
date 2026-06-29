"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="
      min-h-screen
      flex items-center
      gradient-bg
      px-10
    ">
      <div className="
        max-w-7xl mx-auto
        grid lg:grid-cols-2
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
            bg-green-700
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