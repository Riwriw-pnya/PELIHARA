import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Supported from "@/components/Supported";
import Product from "@/components/Product";
import FeaturesPeliharaku from "@/components/FeaturesPeliharaku";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Supported />
      <Product />
      <FeaturesPeliharaku />
      <Pricing />
      <Faq />
      <Partners />
      <Footer />
    </>
  );
} 
