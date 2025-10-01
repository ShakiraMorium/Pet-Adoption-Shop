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

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      const url = `/pets/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
      try {
        const response = await apiClient.get(url);
        const data = await response.data;

        setPets(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, [currentPage, priceRange, selectedCategory, searchQuery, sortOrder]);

  return { pets, loading, totalPages };
};

export default useFetchPet;