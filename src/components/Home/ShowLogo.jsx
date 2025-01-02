import img from '../../assets/images/more/9.png'
import logo1 from '../../assets/images/icons/1.png'
import logo2 from '../../assets/images/icons/2.png'
import logo3 from '../../assets/images/icons/3.png'
import logo4 from '../../assets/images/icons/4.png'

const ShowLogo = () => {
  return (
    <div
      className="featured-item relative bg-fixed bg-cover bg-center p-5 lg:p-20 mt-10 lg:mt-20"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-0"></div>

      <div className="relative flex justify-between z-10 lg:p-3 p-0">
        
          <img
            src={logo1}
            alt=""
            className=""
          />
          <img
            src={logo2}
            alt=""
            className="  "
          />
          <img
            src={logo3}
            alt=""
            className=" "
          />
          <img
            src={logo4}
            alt=""
            className=""
          />
        
      </div>
    </div>
  );
};

export default ShowLogo;
