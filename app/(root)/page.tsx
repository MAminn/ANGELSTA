
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarketAnalysis from "@/components/MarketAnalysis";
import ProductsServices from "@/components/ProductsServices";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";


const Home = () => {
  return (
    <section className="z-10">
      <Hero />
      <ProductsServices />
      <MarketAnalysis />
      <Testimonials />
      <TrustedBy />
      <Footer />
    </section>
  );
};

export default Home;
