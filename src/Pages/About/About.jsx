// import { useEffect, useState } from "react";
// import apiClient from "../../services/api-client";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     apiClient
//       .get("/categories/")
//       .then((res) => setCategories(res.data.results || []))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading categories...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="categories-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
//       {categories.map((cat) => (
//         <div
//           key={cat.id}
//           className="category-card cursor-pointer border p-4 rounded"
//           onClick={() => navigate(`/category/${cat.id}`)}
//         >
//           <h3 className="font-bold text-lg">{cat.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default About;


import { useEffect, useState } from "react";

const About = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Pet Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p>{category.description}</p>
            <p className="text-sm text-gray-500">
              Pets in this category: {category.pet_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
