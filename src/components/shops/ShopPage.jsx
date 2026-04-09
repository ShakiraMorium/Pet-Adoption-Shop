import { useState } from "react";
import PetList from "./PetList";
import Pagination from "./Pagination";
import useFetchPet from "../../hooks/useFetchPets";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelecetedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const { pets, loading, totalPages, error } = useFetchPet(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder
  );

  const { categories } = useFetchCategories();

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-amber-500">
      <h1 className="text-3xl font-bold mb-8 ">Shop Our Pets</h1>
      <FilterSection
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={setSelecetedCategory}
        searchQuery={searchQuery}
        handleSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        handleSorting={setSortOrder}
      />
      <PetList pets={pets} loading={loading} error={error} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;