"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-32
          left-16
          text-green-500/20
        "
      >
        <PawPrint size={90} />
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          top-96
          right-24
          text-green-400/20
        "
      >
        <PawPrint size={120} />
      </motion.div>

      <motion.div
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-32
          left-1/3
          text-green-500/15
        "
      >
        <PawPrint size={100} />
      </motion.div>

      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          top-24
          right-1/2
          w-72
          h-72
          rounded-full
          border-2
          border-green-400/30
        "
      />

      <motion.div
        animate={{
          x: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          right-20
          w-80
          h-24
          rounded-full
          border-2
          border-green-300/30
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-64
          h-64
          rounded-full
          bg-green-300/20
          blur-3xl
        "
      />
    </div>
  );
}