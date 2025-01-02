import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

const PopularProduct = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    axios
      .get("https://coffee-store-server-flame-two.vercel.app/coffee")
      .then((data) => setCoffees(data.data));
  }, []);
  return (
    <div>
      <div className="text-2xl lg:text-4xl text-amber-950 font-bold text-center lg:mt-20 mt-10">
        <h2>Our Popular Products</h2>
        <p>
          <p className="text-xs lg:text-sm font-normal mt-3 lg:mb-10 mb-5">
            We are an online coffee shop offering high-quality, affordable
            coffee <br /> blends to customers worldwide.
          </p>
        </p>

        {/* <div className="border-b-2 w-1/3 mx-auto mb-5 mt-2 border-amber-950"></div> */}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-2">
        {coffees.slice(0, 6).map((coffee) => (
          <ProductCard key={coffees._id} coffee={coffee}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
