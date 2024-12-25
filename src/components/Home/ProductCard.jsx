const ProductCard = ({coffee}) => {
  const { name, supplier, taste, category, photo } = coffee;
  return (
    <div className="card p-5 bg-[#F1E6C6]  shadow-xl text-amber-950">
      <figure className="border-b-4 border-amber-950">
        <img className="object-cover"  src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-between w-full items-center">
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <p>Category : {category}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
        </div>
        
      </div>
      <div className="mx-auto">
          <button className="btn bg-[#F1E6C6] hover:bg-slate-100 text-amber-950 ">Add To Cart</button>
        </div>
    </div>
  );
};

export default ProductCard;
