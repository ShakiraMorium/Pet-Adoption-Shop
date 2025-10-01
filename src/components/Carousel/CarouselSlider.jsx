import banner from "../../assets/images/banner/ban.jpg";
import "../../styles/Button.css";
const CarouselSlider = ({ title, subtitle, image }) => {
  return (
    <section
      className="w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Content  */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-600 my-4">{subtitle}</p>

         
           <button type="button" className="adopt-wrapper adopt-btn ">
            <strong>Adopt Me</strong>
            <div className="adopt-container-stars">
              <div className="adopt-stars"></div>
            </div>

            <div className="adopt-glow">
              <div className="adopt-circle"></div>
              <div className="adopt-circle"></div>
            </div>
          </button>
         
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-3/4 sm:w-2/3 md:w-full lg:max-w-md xl:max-w-lg drop-shadow-lg object-contain"
            src={image}
            alt="Adopt pet"
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselSlider;
