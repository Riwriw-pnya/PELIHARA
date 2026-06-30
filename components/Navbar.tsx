"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
      <div className="w-full h-18 px-12 flex items-center justify-between">

        {/* Logo kiri */}
        <a href="/#home">
          <Image
            src="/pelihara-logo.png"
            alt="Pelihara Logo"
            width={100}
            height={100}
          />
        </a>

        {/* Menu tengah */}
        <div className="flex items-center gap-10">
          <a
            href="/"
            className={
              pathname === "/"
                ? "px-6 py-3 rounded-2xl bg-green-100 border border-green-400 text-green-700 font-semibold"
                : "font-medium text-gray-700"
            }
          >
            Home
          </a>

          <div
            className="relative"
          >
            <button 
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-green-600">
              Product
            <ChevronDown
                size={18}
                className={`
                  transition duration-300
                  ${open ? "rotate-180" : ""}
                `}
              />
            </button>

            {open && (
              <div className="absolute top-12 left-0 w-60 bg-white rounded-xl border border-gray-300 shadow-lg overflow-hidden">
                <a
                  href="/#simitra"
                  className="block px-6 py-4 hover:bg-green-50"
                  onClick={() => setOpen(false)}
                >
                  SiMitra Pelihara
                </a>

                <a
                  href="/#siternak"
                  className="block px-6 py-4 hover:bg-green-50"
                  onClick={() => setOpen(false)}
                >
                  SiTernak Pelihara
                </a>

                <a
                  href="/#peliharaku"
                  className="block px-6 py-4 hover:bg-green-50"
                  onClick={() => setOpen(false)}
                >
                  Peliharaku
                </a>
              </div>
            )}
          </div>

          <a href="/#pricing" className="font-medium text-gray-700">
            Pricing
          </a>

          <a
            href="/#about"
            className="font-medium text-gray-700"
          >
            About Us
          </a>

          <a
            href="/contact"
            className={
              pathname === "/contact"
                ? "px-6 py-3 rounded-2xl bg-green-100 border border-green-400 text-green-700 font-semibold"
                : "font-medium text-gray-700"
            }
          >
            Contact
          </a>
        </div>

        {/* Login kanan */}
        <a
          href="/login"
          className="
            px-6 py-3
            rounded-xl
            bg-[#408A71]
            text-white
            hover:bg-[#3d5b48]
            transition
          "
        >
          Login
        </a>

      </div>
    </nav>
  );
}