// import { useEffect, useState } from "react";
// import apiClient from "../../services/api-client";
import useFetchCategories from "../../hooks/useFetchCategories";
import CategoryItems from "./CategoryItems";



const Category = () => {
  
  const { categories, loading, error } = useFetchCategories();
  
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Category Heading  */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Pet Categories</h2>
      
         
        
      </div>

       {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-56 rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50 animate-pulse"
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-red-500 font-medium" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryItems key={category.id ?? category.name ?? index} index={index} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;