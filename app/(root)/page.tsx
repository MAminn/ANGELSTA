
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import ProductsServices from "@/components/ProductsServices";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";


const Home = () => {
  return (
    <section className='z-10'>
      <Hero />
      <ProductsServices />
      <Solutions />
      <Testimonials />
      <TrustedBy />
      <Footer />
    </section>
  );
};

export default Home;
