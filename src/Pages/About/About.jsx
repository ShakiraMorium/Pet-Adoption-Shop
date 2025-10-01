import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/categories/")
      .then((res) => setCategories(res.data.results || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="categories-container grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="category-card cursor-pointer border p-4 rounded"
          onClick={() => navigate(`/category/${cat.id}`)}
        >
          <h3 className="font-bold text-lg">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default About;
