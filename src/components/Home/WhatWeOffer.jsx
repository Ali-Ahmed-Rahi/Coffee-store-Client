import img1 from "../../assets/images/cups/Rectangle 9.png";
import img2 from "../../assets/images/cups/Rectangle 10.png";
import img3 from "../../assets/images/cups/Rectangle 11.png";
import img4 from "../../assets/images/cups/Rectangle 12.png";
import img5 from "../../assets/images/cups/Rectangle 13.png";
import img6 from "../../assets/images/cups/Rectangle 14.png";
import img7 from "../../assets/images/cups/Rectangle 15.png";
import img8 from "../../assets/images/cups/Rectangle 16.png";

const WhatWeOffer = () => {
  return (
    <div>
      <div className="text-4xl text-amber-950 font-bold text-center mt-20 "> 
        <h2>What We Offer</h2>
        <p className="text-sm font-normal mt-3 mb-8">Explore our finest coffee blends and experience unmatched <br /> flavor in every sip</p>
        {/* <div className="border-b-2 w-1/3 mx-auto mb-5 mt-2 border-amber-950"></div> */}
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
