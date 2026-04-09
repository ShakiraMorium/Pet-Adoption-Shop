import { FaAngleRight } from "react-icons/fa6";
// import img5 from "../../assets/images/pets/img8.jpg";
const CategoryItems = ({ index, category }) => {
  const gradients = [
    "from-pink-100 to-blue-100",
    "from-blue-100 to-purple-100",
    "from-purple-100 to-pink-100",
    "from-pink-100 to-blue-100",
  ];
  const itemCount =
    category.pet_count ?? category.product_count ?? category.count ?? 0;
  const description =
    category.description ||
    `Find loving ${category.name?.toLowerCase() || "pets"} ready for adoption.`;

  return (
    <article
      className={`rounded-2xl p-5 border border-white/70 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${
        gradients[index % gradients.length]
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl uppercase">
          {(category.name || "P").charAt(0)}
        </div>
        <span className="text-sm text-gray-700 bg-white/80 px-3 py-1 rounded-full font-medium">
          {itemCount} Pets
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{category.name}</h3>
      <p className="text-gray-700 text-sm mb-5 min-h-10">{description}</p>

      <button
        type="button"
        className="text-pink-600 font-semibold hover:text-pink-700 transition-colors flex items-center gap-1"
      >
        Explore
        <FaAngleRight />
      </button>
    </article>
  );
};

export default CategoryItems;
