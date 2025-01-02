import banner from "../../assets/images/more/3.png";


const Banner = () => {
  return (
    <div className="relative ">
      <img className=" bg-center min-h-screen object-cover" src={banner} alt="" />
      
      <div className="absolute bottom-48 left-36 lg:hidden block">
        <h2 className="text-xl md:hidden block text-white  ">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="lg:text-lg mt-3">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!...
          </p>
          <button className="btn bg-[#F1E6C6] hover:bg-white text-amber-950 rounded-full mt-5">
            Learn More
          </button>
      </div>
      <div className="absolute lg:bottom-80 right-28 ">
        <div className="lg:text-white text-green-600 hidden md:block  p-2">
          <h2 className="lg:text-4xl font-semibold ">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="lg:text-lg mt-6 mb-5">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of <br /> every moment!!! Enjoy
            the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#F1E6C6] hover:bg-white text-amber-950 rounded-full ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
