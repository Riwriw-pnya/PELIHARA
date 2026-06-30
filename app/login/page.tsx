"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem(
      "pelihara-login",
      JSON.stringify(form)
    );

    alert("Data berhasil disimpan!");
  };

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#F4F4F4]
      px-4
      mt-10
    ">
      <div className="
        w-full
        max-w-md
        bg-[#f5f5f5]
        rounded-[28px]
        p-10
        shadow-xl
      ">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/pelihara-logo.png"
            alt="Pelihara"
            width={220}
            height={120}
          />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <label className="
              block
              text-sm
              font-semibold
              mb-2
            ">
              Email
            </label>

            <input
              type="email"
              placeholder="Masukkan Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
                w-full
                border
                border-gray-400
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-[#408A71]
              "
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="
              block
              text-sm
              font-semibold
              mb-2
            ">
              Kata Sandi
            </label>

            <div className="relative mb-10">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Sandi"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  border-gray-400
                  rounded-xl
                  px-4
                  py-3
                  pr-12
                  outline-none
                  focus:border-[#408A71]
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              bg-[#5A927B]
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-[#4A7B67]
              transition
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}