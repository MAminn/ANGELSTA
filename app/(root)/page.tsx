import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MarketAnalysis from '@/components/MarketAnalysis';
import ProductsServices from '@/components/ProductsServices';


const Home = () => {
  return (
    <>
      <Hero />
      <ProductsServices />
      <MarketAnalysis />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home