
import img from "../../assets/images/more/14.jpg"
import { IoIosArrowForward } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="">
      <div className="text-2xl lg:text-4xl text-amber-950 font-bold text-center mt-10 lg:mt-20 ">
        <h2>About Us</h2>
        <p className="text-xs lg:text-sm font-normal mt-3 mb-8">
          We are a Coffee shop offering high-quality, affordable Coffees from our own
          production, available both <br /> Online and in our physical store for
          customers worldwide
        </p>
      </div> 
      <div className="lg:flex gap-1">
        <div className=" lg:w-1/3 order-last">
          <img className="object-center mx-auto " src={img} alt="" />
        </div>
        {/* border part */}
        <div className=" lg:w-2/3 lg:space-y-10 space-y-1">
          <div className=" bg-amber-950 p-8 lg:flex gap-3 lg:rounded-l-full items-center">
            <IoIosArrowForward  className="text-2xl" />
            <div className="flex-col">
              <h2 className="text-xl">Our mission</h2>
              <p className="text-sm">
                Our team aspires to bring you the world’s best Coffee and share
                the Coffee life we love.
              </p>
            </div>
          </div>
          <div className=" bg-amber-950 p-8 lg:flex gap-3 lg:rounded-l-full items-center">
          <IoIosArrowForward  className="text-2xl" />
            <div className="flex-col">
              <h2 className="text-xl">Professional Team</h2>
              <p className="text-sm">
              Over the years, we have gathered the team of dedicated tea experts.
              </p>
            </div>
          </div>
          <div className=" bg-amber-950 p-8 lg:flex gap-3 lg:rounded-l-full items-center">
          <IoIosArrowForward  className="text-2xl" />
            <div className="flex-col">
              <h2 className="text-xl">Our Product Range</h2>
              <p className="text-sm">
              We offer a wide range of teas of our own production and by other manufacturers.
              </p>
            </div>
          </div>
          <div className=" bg-amber-950 p-8 lg:flex gap-3 lg:rounded-l-full items-center">
            <IoIosArrowForward  className="text-2xl" />
            <div className="flex-col">
              <h2 className="text-xl">Our Product Range</h2>
              <p className="text-sm">
              We offer a wide range of teas of our own production and by other manufacturers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
