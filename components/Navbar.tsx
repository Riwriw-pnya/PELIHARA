"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-center gap-10">
        
        <a
          href="#"
          className="px-8 py-4 rounded-2xl border border-green-400 bg-green-100 text-green-700 font-semibold"
        >
          Home
        </a>

        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-green-600">
            Product
            <ChevronDown size={18} />
          </button>

          {open && (
            <div className="absolute top-10 left-0 w-60 bg-white rounded-2xl shadow-lg border">
              <a
                href="#"
                className="block px-6 py-4 hover:bg-gray-100"
              >
                SiMitra Pelihara
              </a>

              <a
                href="#"
                className="block px-6 py-4 hover:bg-gray-100"
              >
                SiTernak Pelihara
              </a>

              <a
                href="#"
                className="block px-6 py-4 hover:bg-gray-100"
              >
                Peliharaku
              </a>
            </div>
          )}
        </div>

        <a href="#" className="font-medium text-gray-700">
          Pricing
        </a>

        <a href="#" className="font-medium text-gray-700">
          About Us
        </a>

        <a href="#" className="font-medium text-gray-700">
          Contact
        </a>
      </div>
    </nav>
  );
}