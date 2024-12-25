import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/Home/ProductCard";

const Products = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-amber-950 text-center mt-5">
          All Products
        </h2>
        <div className="border-t-4 w-56 mx-auto border-amber-950"></div>
      </div>
      
      <div className=" w-3/4 mx-auto  grid grid-cols-3 p-10 gap-10">
      {coffees.map(coffee=><ProductCard key={coffees._id} coffee={coffee}></ProductCard>)}
      </div>
      
    </div>
  );
};

export default Products;
