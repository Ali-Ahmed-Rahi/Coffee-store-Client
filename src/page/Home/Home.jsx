import AboutUs from "../../components/Home/AboutUs";
import Banner from "../../components/Home/Banner";
import Fetured from "../../components/Home/Fetured";
import LatestNews from "../../components/Home/LatestNews";
import PopularProduct from "../../components/Home/PopularProduct";
import ShowLogo from "../../components/Home/ShowLogo";
import Testimonial from "../../components/Home/Testimonial";
import WhatWeOffer from "../../components/Home/WhatWeOffer";

const Home = () => {
  return (
    <div className="lg:relative">
      <Banner></Banner>
      <div className="lg:absolute lg:-my-10 lg:w-full">
        <Fetured></Fetured>
      </div>
      <div className="max-w-7xl mx-auto lg:pt-40">
        <PopularProduct></PopularProduct>
        <WhatWeOffer></WhatWeOffer>
        <AboutUs></AboutUs>
        <ShowLogo></ShowLogo>
        <LatestNews></LatestNews>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
