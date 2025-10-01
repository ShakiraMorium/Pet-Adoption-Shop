import  Features  from "../../components/Features";
import HeroCarousel from "../../components/Carousel/HeroCarousel";
import Pet from "../../components/Pets/Pet";
import Category from "../../components/Categories/Category";
import DiscountSection from "../../components/Discount/DiscountSection";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <Features/>
            <Pet/>
            <About />
            <Category/>
            <DiscountSection/>
        </div>
    );
};

export default Home;