"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah Pelihara dapat digunakan di berbagai perangkat?",
      answer:
        "Ya. Pelihara dapat diakses melalui komputer, laptop, maupun perangkat mobile.",
    },
    {
      question: "Apakah data klinik aman?",
      answer:
        "Semua data tersimpan secara aman dan dilindungi dengan sistem keamanan modern.",
    },
    {
      question: "Apakah tersedia masa percobaan?",
      answer:
        "Tersedia demo dan konsultasi sebelum berlangganan.",
    },
    {
      question: "Apakah dapat digunakan oleh banyak pengguna?",
      answer:
        "Ya. Sistem mendukung multi-user sesuai kebutuhan klinik atau perusahaan.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-32 px-10 bg-[#f7faf7]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-5">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Pertanyaan yang sering ditanyakan mengenai Pelihara.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-md
                overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  w-full
                  flex justify-between
                  items-center
                  p-7
                  text-left
                "
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-7 pb-7 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}