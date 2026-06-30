"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Supported() {
  return (
    <section
      className="
        py-24
        bg-gradient-to-b
        from-[#f4f4f4]
        to-[#e8f7ed]
      "
    >

      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      <div className="max-w-7xl mx-auto px-10">

        {/* Supported By */}
        <h3 className="text-center text-3xl font-semibold text-gray-800 mb-16">
          Supported by
        </h3>

        {/* Logo */}
        <div className="
          flex flex-wrap
          justify-center
          items-center
          gap-16
          mb-20
        ">
          <Image
            src="/supportedIMG/primestep.png"
            alt="PrimeStep"
            width={180}
            height={80}
            className="object-contain"
          />

          <Image
            src="/supportedIMG/ITB.png"
            alt="DKST"
            width={240}
            height={80}
            className="object-contain"
          />

          <Image
            src="/supportedIMG/entrepeneur.png"
            alt="Entrepreneur Hub"
            width={180}
            height={80}
            className="object-contain"
          />

          <Image
            src="/supportedIMG/pmw.png"
            alt="PMW"
            width={180}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <p className="
          text-center
          text-gray-600
          text-lg
          mb-20
        ">
          We're hard at work right now!
        </p>

        {/* Statistik */}
        <div className="
          grid md:grid-cols-3
          gap-12
          text-center
        ">
          <div>
            <h2 className="
              text-6xl
              font-bold
              text-green-950
            ">
              200+
            </h2>

            <p className="mt-4 text-xl text-gray-700">
              Associate
            </p>
          </div>

          <div>
            <h2 className="
              text-6xl
              font-bold
              text-green-950
            ">
              7
            </h2>

            <p className="mt-4 text-xl text-gray-700">
              Doctor
            </p>
          </div>

          <div>
            <h2 className="
              text-6xl
              font-bold
              text-green-950
            ">
              98%
            </h2>

            <p className="mt-4 text-xl text-gray-700">
              Satisfaction
            </p>
          </div>
        </div>

      </div>
      </motion.div>
    </section>
  );
}