import Image from "next/image";

export default function Partners() {
  return (
    <section
      className="
        py-24
        bg-gradient-to-b
        from-[#f4f4f4]
        to-[#e8f7ed]
      "
    >
      <div className="max-w-xl mx-auto px-10">

        {/* Supported By */}
        <h3 className="text-center text-3xl font-semibold text-gray-800 mb-16">
            Official Partners
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
            src="/partnerIMG/satuPeta.png"
            alt="satuPEta"
            width={180}
            height={80}
            className="object-contain max-h-30 w-auto"
          />

          <Image
            src="/partnerIMG/d'clovers.png"
            alt="d'clovers"
            width={240}
            height={80}
            className="object-contain max-h-30 w-auto"
          />

          <Image
            src="/partnerIMG/ngepawRangers.png"
            alt="ngepawRangers"
            width={180}
            height={80}
            className="object-contain max-h-30 w-auto"
          />

          <Image
            src="/partnerIMG/curaweda.png"
            alt="curaweda"
            width={180}
            height={80}
            className="object-contain max-h-30 w-auto"
          />

          <Image
            src="/partnerIMG/pdhi.png"
            alt="pdhi"
            width={180}
            height={80}
            className="object-contain max-h-30 w-auto"
          />
        </div>
        </div>
    </section>
);
}