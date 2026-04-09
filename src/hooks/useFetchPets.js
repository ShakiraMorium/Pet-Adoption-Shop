import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchPet = (
  currentPage,
  priceRange,
  selectedCategory,
  searchQuery,
  sortOrder
) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      setError("");

      const url = `/pets/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
      try {
        const response = await apiClient.get(url);
        const data = response.data;
        const normalizedPets = Array.isArray(data?.results)
          ? data.results
          : Array.isArray(data)
          ? data
          : [];

        setPets(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      } catch (error) {
        console.log(error);
        setPets(normalizedPets);

        if (typeof data?.count === "number") {
          const perPage = normalizedPets.length || 1;
          setTotalPages(Math.max(1, Math.ceil(data.count / perPage)));
        } else {
          setTotalPages(1);
        }
      } catch (fetchError) {
        console.log(fetchError);
        setPets([]);
        setTotalPages(0);
        setError("Failed to load pets. Please check your network and try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, [currentPage, priceRange, selectedCategory, searchQuery, sortOrder]);

  return { pets, loading, totalPages,error };
};

export default useFetchPet;