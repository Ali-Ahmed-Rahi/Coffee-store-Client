import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const DetailsProduct = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div className="flex justify-center items-center  text-amber-950 min-h-screen pt-16 lg:pt-0">
      <div className=" lg:w-2/4 p-1 ">
        <div className="mb-5 hidden md:block ">
          <Link to="/products" className=" lg:text-2xl text-3xl">
            <FaRegArrowAltCircleLeft />
          </Link>
        </div>
        <div className="lg:p-16 bg-[#F4F3F0] rounded-xl p-2">
        <div className="mb-5 ">
          <Link to="/products" className=" lg:text-2xl text-3xl lg:hidden block">
            <FaRegArrowAltCircleLeft />
          </Link>
        </div>
          <div className="flex-col md:flex-row lg:flex  lg:space-x-10  mx-auto lg:items-center">
            <img src={details.photo} className="lg:w-full mx-auto object-cover" />
            <div>
              
              <div className="">
                <h3>
                  <span className="font-bold text-lg">Name: </span> {details.name}
                </h3>
                <h4>
                  <span className="font-bold text-lg">Chef:</span> {details.chef}
                </h4>
                <h4 className="font-semibold">
                  <span className="font-bold text-lg">Price: </span>$
                  {details.price}
                </h4>
                <h4>
                  <span className="font-bold text-lg">Taste:</span> {details.taste}
                </h4>
                <h4>
                  <span className="font-bold text-lg">Category: </span>{" "}
                  {details.category}
                </h4>
                <p>
                  <span className="font-bold text-lg">Details: </span> {details.details}
                </p>
              </div>
              <div>
                <button className="btn mt-5 bg-amber-950 text-white">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
