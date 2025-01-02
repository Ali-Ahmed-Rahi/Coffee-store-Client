import { FaRegEye } from "react-icons/fa";
import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, taste, category, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-lrpi.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card p-5 bg-[#F1E6C6]  shadow-xl text-amber-950">
      <figure className="border-b-4 border-amber-950">
        <img src={photo} alt="Coffee" />
      </figure>
      <div className="flex justify-between w-full items-center">
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <p>Category : {category}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
        </div>
        <div>
          <div className="join join-vertical space-y-3 ">
            <button className="btn text-lg text-amber-950 bg-[#d3d0c5] hover:bg-[#d3d0c5] rounded-full">
              <FaRegEye />
            </button>
            <Link to={`/dashboard/upDateProduct/${_id}`}>
              <button className="btn text-lg text-amber-950 bg-green-600 hover:bg-green-400  rounded-full">
                <MdOutlineEdit />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-lg text-amber-950 bg-red-600 hover:bg-red-500 rounded-full"
            >
              <MdOutlineDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
