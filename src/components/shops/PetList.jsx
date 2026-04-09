import PetItem from "../Pets/PetItem";

const PetList = ({ pets, loading, error }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center py-10 min-h-screen">
        <span className="loading loading-spinner loading-xl text-secondary"></span>
      </div>
    );

    
  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <PetItem pet={pet} key={pet.id} />
      ))}
    </div>
  );
};

export default PetList;