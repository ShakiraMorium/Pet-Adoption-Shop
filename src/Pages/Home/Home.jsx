import Features from "../../components/Features";
import HeroCarousel from "../../components/Carousel/HeroCarousel";
import Pet from "../../components/Pets/Pet";
import Category from "../../components/Categories/Category";
import DiscountSection from "../../components/Discount/DiscountSection";
import About from "../About/About";
import FAQSection from "../../components/FAQSection";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroCarousel />
      <Features />
      <Pet />
      <About />
      
      <Category />
      <FAQSection />
      <DiscountSection />
    </div>
  );
};

export default Home;
