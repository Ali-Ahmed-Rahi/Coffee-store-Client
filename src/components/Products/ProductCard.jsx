import { Link } from "react-router-dom";



const ProductCard = ({ coffee }) => {
  const {_id, name, price, taste, category, photo } = coffee;
  return (
    <div className="card p-5 bg-[#F1E6C6] hover:shadow-2xl text-amber-950">
      <figure className="border-b-4 border-amber-950">
        <img className="object-cover h-36 lg:h-72 i" src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-between w-full items-center">
        <div className="lg:p-5">
          <h2 className="lg:card-title">Name : {name}</h2>
          <p className="lg:font-semibold">Category : {category}</p>
          <p className="lg:font-semibold">Price : ${price}</p>
          <p className="lg:font-semibold hidden lg:block">Taste : {taste}</p>
        </div>
      </div>
      <div className="mx-auto lg:space-x-10 space-y-2 mt-2 ">
        <Link to={`/detailsProduct/${_id}`} className="btn  rounded-lg bg-[#dfb586] hover:bg-[#eed1b1] text-amber-950 w-[98px]">
          Details
        </Link>
        <button className="btn bg-amber-950 hover:bg-amber-900 text-white  rounded-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
