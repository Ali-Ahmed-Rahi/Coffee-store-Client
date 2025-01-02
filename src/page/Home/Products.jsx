import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";

const Products = () => {
  const coffees = useLoaderData();
  return (
    <div className=" pt-16 lg:pt-20">
      <div className=" mt-5">
        <h2 className="text-4xl font-bold text-amber-950 text-center">
          All Products
        </h2>
        <div className="flex justify-center">
          <div className="border-b-4 w-52   border-amber-950"></div>
          <p className="text-amber-950 text-2xl font-bold">/\</p>
          <div className="border-b-4 w-52  border-amber-950"></div>
        </div>
      </div>
      
      <div className=" w-5/6 lg:w-3/4 mx-auto grid lg:grid-cols-3 lg:p-10 gap-10 mt-5 mb-5">
      {coffees.map(coffee=><ProductCard key={coffees._id} coffee={coffee}></ProductCard>)}
      </div>
      
    </div>
  );
};

export default Products;
