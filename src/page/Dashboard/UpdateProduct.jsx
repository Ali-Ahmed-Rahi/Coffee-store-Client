import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, taste, category, photo, chef, details } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const chef = from.chef.value;
    const supplier = from.supplier.value;
    const taste = from.taste.value;
    const category = from.category.value;
    const details = from.details.value;
    const photo = from.photo.value;
    const upDateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(upDateCoffee);

    // sand data to the server
    fetch(`https://coffee-store-server-lrpi.vercel.app//coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upDateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee UpDate SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        from.reset();
      });
  };
  return (
    <div>
      <div className="bg-[#F3F3F3] p-10 rounded-lg shadow-2xl w-5/6 mx-auto mt-3 text-amber-950">
        <h2 className="text-2xl font-bold text-center mb-4">
          Update Existing Product Details
        </h2>
        <p className="text-center text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee}>
          <div className=" grid lg:grid-cols-2 gap-6 mb-4">
            {/* Name Input */}
            <div>
              <label className="block font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                defaultValue={name}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
            {/* Chef Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="chef">
                Chef
              </label>
              <input
                id="chef"
                type="text"
                defaultValue={chef}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
            {/* Supplier Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="supplier">
                Supplier
              </label>
              <input
                id="supplier"
                type="text"
                defaultValue={supplier}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
            {/* Taste Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="taste">
                Taste
              </label>
              <input
                id="taste"
                type="text"
                defaultValue={taste}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
            {/* Category Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="category">
                Category
              </label>
              <input
                id="category"
                type="text"
                defaultValue={category}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
            {/* Details Input */}
            <div>
              <label className="block  font-medium mb-2" htmlFor="details">
                Details
              </label>
              <input
                id="details"
                type="text"
                defaultValue={details}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
            {/* Photo Input */}
            <div className="lg:col-span-2">
              <label className="block  font-medium mb-2" htmlFor="photo">
                Photo
              </label>
              <input
                id="photo"
                type="text"
                defaultValue={photo}
                className="w-full p-3 border border-gray-300 bg-white rounded-md"
              />
            </div>
          </div>
          <button
            type="submit"
            className="block bg-[#D2B48C] text-amber-950 text-lg font-medium py-3 px-6 rounded-md mx-auto hover:bg-[#b59874] w-full"
          >
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
