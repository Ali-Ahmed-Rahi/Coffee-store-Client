import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/DashBoard/CoffeeCard";
import { useState } from "react";

const AllProduct = () => {
  const loadCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadCoffees)
  return (
    <div>
      <div className="text-4xl font-bold text-center text-amber-950 border-b-4 border-amber-950">
        <h2>All Products</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {
        loadCoffees.map(coffee=><CoffeeCard 
          key={loadCoffees._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
        </div>
    </div>
  );
};

export default AllProduct;
