import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarketAnalysis from "@/components/MarketAnalysis";
import ProductsServices from "@/components/ProductsServices";

const Home = () => {
  return (
    <section className="z-10">
      <Hero />
      <ProductsServices />
      <MarketAnalysis />
      <AboutUs />
      <Footer />
    </section>
  );
};

export default Home;
