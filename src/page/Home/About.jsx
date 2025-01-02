import img from "../../assets/images/more/9.png";
import img2 from "../../assets/images/more/14.jpg";
import logo1 from "../../assets/images/icons/1.png";
import logo2 from "../../assets/images/icons/2.png";
import logo3 from "../../assets/images/icons/3.png";
import logo4 from "../../assets/images/icons/4.png";


const About = () => {
  return (
    <div className="max-w-7xl mx-auto text-amber-950 rounded-lg">
      {/*  */}
      <div className="text-2xl lg:text-4xl text-amber-950 font-bold text-center lg:pt-10 mt-10 ">
        <h2>About Us</h2>
        <p></p>
        <div className="flex justify-center">
          <div className="border-b-4 w-52   border-amber-950"></div>
          <p className="">/\</p>
          <div className="border-b-4 w-52  border-amber-950"></div>
        </div>
      </div>
      {/*  */}
      <div className="mt-10  p-4 rounded-xl">
        <div className="text-lg">
          <p>
            <span className="text-3xl font-bold">Welcome</span> to Caffeine
            Canvas, where every cup tells a story. Our journey began with a
            simple yet profound mission: to create a space where coffee lovers
            and casual drinkers alike could come together to enjoy exceptional
            coffee in a warm and inviting environment.
          </p>
          <p>
            At the heart of what we do is our commitment to quality. We
            meticulously source the finest coffee beans from trusted growers,
            ensuring every sip is rich, smooth, and unforgettable. Each cup is
            brewed with care by our skilled baristas, who bring passion and
            expertise to every order, whether it’s your go-to latte or an
            adventurous seasonal special.
          </p>
          <p>
            But we’re more than just a coffee shop. We’re a community hub—a
            place where friends meet, ideas spark, and moments turn into
            memories. Our cozy interiors, friendly staff, and attention to
            detail create an experience that goes beyond the ordinary.
          </p>
          <p>
            From the morning rush to leisurely afternoons, Caffeine Canvas is
            here to serve as your retreat from the hustle and bustle. Whether
            you&apos;re grabbing a quick espresso on the way to work, indulging
            in a handcrafted cappuccino, or enjoying our freshly baked treats,
            we promise an experience that delights your senses and warms your
            heart.
          </p>
          <p>
            Thank you for being part of our story. We look forward to sharing
            many more cups of coffee and moments of joy with you.
          </p>
        </div>
        {/*  */}
        <div
          className="featured-item relative bg-fixed bg-cover bg-center p-5 lg:p-20 mt-10 lg:mt-20"
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5 z-0"></div>

          <div className="relative flex justify-between z-10 lg:p-3 p-0">
            <img src={logo1} alt="" className="" />
            <img src={logo2} alt="" className="  " />
            <img src={logo3} alt="" className=" " />
            <img src={logo4} alt="" className="" />
          </div>
        </div>
        {/*  */}
        <div className="lg:flex gap-1 mt-16">
          
          <div className="lg:w-2/3 text-lg space-y-7  mt-5">
            <p>
            Our journey started with a passion for coffee and a vision to create a space where people from all walks of life could come together to enjoy great flavors and even better company. We’ve grown from our humble beginnings into a trusted destination for coffee enthusiasts and casual visitors alike, but our mission has remained the same: to serve exceptional coffee with warmth and authenticity
            </p>
            <p>
            We’re committed to sourcing only the highest quality beans from ethical and sustainable growers. Each batch is carefully roasted to bring out its unique flavors, and our expert baristas ensure every cup meets the highest standards of excellence. Whether you’re a fan of a bold espresso, a creamy latte, or an adventurous cold brew, we have something to excite your palate.
            </p>
            <p>
            While coffee is at the heart of what we do, our offerings extend beyond the cup. From freshly baked pastries and artisan sandwiches to seasonal specials, we provide a wide range of delicious options to complement your coffee experience. Every item on our menu is crafted with the same care and attention to detail as our coffee.
            </p>
            <p>
            Caffeine Canvas isn’t just a coffee shop—it’s a place to unwind, connect, and recharge. Whether you’re looking for a cozy corner to work, a vibrant space to meet friends, or just a quiet moment to yourself, our inviting atmosphere is designed to make you feel at home.
            </p>
          </div>
          <div className=" lg:w-1/3 order-last">
            <img className="object-center mx-auto " src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
