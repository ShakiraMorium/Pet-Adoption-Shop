import { Link } from "react-router";
import defaultImage from "../../assets/images/pets/img10.jpg";

const PetItem = ({ pet }) => {
  return (
    <Link to={`/shop/${pet.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={
              pet.images.length > 0 ? pet.images[0].image : defaultImage
            }
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{pet.name}</h2>
          <h3 className="font-bold text-xl text-red-700">${pet.price}</h3>
          <p>{pet.description}</p>
          <div className="card-actions mt-1">
            <button className="btn btn-secondary">Adopt Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetItem;