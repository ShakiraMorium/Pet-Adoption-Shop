// import { useEffect, useState } from "react";
// import PetItem from "./PetItem.jsx"; // make sure the path is correct
// import apiClient from "../../services/api-client.js"; // your axios instance
// import ban1 from "../../assets/images/banner/ban2.png";

// const Pet = () => {
//   const [pets, setPets] = useState([]);
//   const [isLoading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);

//     apiClient
//       .get("/pets/") // relative path
//       .then((res) => {
//         console.log(res.data); // check API response in console
//         if (res.data && Array.isArray(res.data.results)) {
//           // take only 8 pets
//           setPets(res.data.results.slice(0, 8));
//         } else {
//           setPets([]);
//         }
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <section
//       className="w-full h-auto bg-cover bg-center p-4 py-4"
//       style={{ backgroundImage: `url(${ban1})` }}
//     >
//       <div className="flex justify-between items-center px-4 md:px-8 mb-4">
//         <h2 className="text-3xl md:text-4xl font-bold">Pets</h2>
//         <a
//           href="#"
//           className="btn btn-secondary px-6 py-6 rounded-full text-lg"
//         >
//           View All
//         </a>
//       </div>

//       {isLoading && (
//         <div className="flex justify-center items-center py-10">
//           <span className="loading loading-spinner loading-xl text-secondary"></span>
//         </div>
//       )}

//       {error && <p className="text-red-600 text-center">{error}</p>}

//       {!isLoading && !error && pets.length > 0 && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {pets.map((pet) => (
//             <PetItem key={pet.id} pet={pet} />
//           ))}
//         </div>
//       )}

//       {!isLoading && !error && pets.length === 0 && (
//         <p className="text-center text-gray-500 mt-6">No Pets Available</p>
//       )}
//     </section>
//   );
// };

// export default Pet;
  

import { useEffect, useState } from "react";
import PetItem from "./PetItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ban1 from "../../assets/images/banner/ban2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ErrorAlert from "../../components/ErrorAlert";
import apiClient from "../../services/api-client";

const Pet = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/pets/")
      .then((res) => setPets(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full h-auto bg-cover bg-center p-4 py-4"
      style={{ backgroundImage: `url(${ban1})` }}
    >
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trending Pets</h2>
          <a
            href="#"
            className="btn btn-secondary px-6 py-6 rounded-full text-lg"
          >
            View All
          </a>
        </div>
        {/* Spinner  */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-xl text-secondary"></span>
          </div>
        )}

        {error && <ErrorAlert error={error} />}
        {/* Pet Slider  */}
        {!isLoading && !error && pets.length > 0 && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            className="mt-4 px-4 container"
          >
            {pets.map((pet) => (
              <SwiperSlide key={pet.id} className="flex justify-center">
                <PetItem key={pet.id} pet={pet} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!isLoading && !error && pets.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No Pets Available
          </p>
        )}
      </div>
    </section>
  );
};

export default Pet;