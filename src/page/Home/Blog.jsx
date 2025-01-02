import  img1  from "../../assets/images/cups/Rectangle 16.png";
import img2  from "../../assets/images/cups/Rectangle 10.png";
import  img3  from "../../assets/images/cups/Rectangle 11.png";
import  img4  from "../../assets/images/cups/Rectangle 12.png";

const Blog = () => {
  return (
    <div className="text-amber-950 max-w-7xl mx-auto pt-5">
      <div className="lg:flex gap-1 mt-16">
        <div className="lg:w-2/3 text-lg space-y-3 ">
        <h2 className="text-2xl font-bold text-center">Caffè Doppio</h2>
          <p>
          Strong and full-bodied, offering a more robust flavor than a single espresso shot. The taste is rich and intense, with a smooth crema.
          </p>
          <p>
           A double shot of espresso, using twice the amount of coffee grounds compared to a regular espresso. The extraction is longer, producing a richer, more concentrated flavor.
          </p>
          <p>
          Those who enjoy a bolder, more intense espresso experience, perfect for those who need an extra caffeine kick.
          </p>
          <p>
          Coffee drinkers who appreciate the boldness of espresso but prefer a touch of creaminess to balance the intensity. It’s an excellent choice for those who seek a middle ground between a straight espresso and a latte.
          </p>
          
          
        </div>
        <div className=" lg:w-1/3 order-last">
          <img className="object-center mx-auto " src={img1} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="lg:flex gap-1 mt-16">
        <div className="lg:w-2/3 text-lg space-y-3 ">
        <h2 className="text-2xl font-bold text-center">Caffè Mocha</h2>
          <p>
          Indulgent and comforting, Caffè Mocha combines the rich, robust flavor of espresso with the sweet, velvety texture of chocolate and milk. The slight bitterness of the espresso complements the sweetness of the chocolate, creating a harmonious blend of flavors that is both rich and satisfying. The whipped cream on top adds an extra layer of smoothness, while the chocolate syrup adds a decadent sweetness to every sip.
          </p>
          <p>
          A shot of espresso is shaken with ice and sugar until it becomes frothy and chilled. It is then strained into a glass and served cold.
          </p>
          <p>
          Coffee lovers looking for a refreshing iced espresso drink, perfect for hot weather or as a cool treat.
          </p>
          <p>
          Those with a sweet tooth who enjoy the combination of coffee and chocolate. It’s a comforting drink perfect for a cozy afternoon or as an after-dinner treat.
          </p>
          
        </div>
        <div className=" lg:w-1/3 order-first">
          <img className="object-center mx-auto " src={img2} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="lg:flex gap-1 mt-16">
        <div className="lg:w-2/3 text-lg space-y-3 ">
        <h2 className="text-2xl font-bold text-center">Caffè Americano</h2>
          <p>
          Smooth and mellow, the Caffè Americano offers the bold, deep flavor of espresso without the intensity. The addition of hot water dilutes the espresso, resulting in a larger, milder cup that still retains the richness of coffee but with a more approachable flavor profile. The slight bitterness is softened, and the coffee’s natural flavors are allowed to come through in a smoother, more drinkable way
          </p>
          <p>
          A shot (or two) of espresso is diluted with hot water, creating a larger, less intense coffee. The water is poured over the espresso shot, which helps to maintain the coffee’s aromatic qualities while making it milder and more similar in strength to regular drip coffee.
          </p>
          <p>
          Those who appreciate the taste of espresso but prefer a lighter, less concentrated flavor. It’s a great option for those who enjoy the ritual of espresso but want something more substantial to sip on throughout the day.
          </p>
          
        </div>
        <div className=" lg:w-1/3 order-last">
          <img className="object-center mx-auto " src={img3} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="lg:flex gap-1 mt-16">
        <div className="lg:w-2/3 text-lg space-y-3 ">
        <h2 className="text-2xl font-bold text-center">Caffè Latte</h2>
          <p>
          Smooth and creamy, a Caffè Latte is an elegant, milk-forward coffee drink that softens the strong flavors of espresso without overpowering them. The espresso’s bitterness is rounded out by the sweetness of the steamed milk, creating a well-balanced and mellow coffee experience. The light layer of foam on top adds a touch of texture without detracting from the smoothness of the drink, making it a comforting choice for coffee lovers who enjoy a subtle, mellow taste.
          </p>
          <p>
          A shot of espresso is combined with a larger amount of steamed milk, typically in a 1:3 or 1:4 ratio, and finished with a thin layer of milk foam. The milk is steamed to create a smooth, velvety texture that complements the espresso’s rich, full-bodied flavor
          </p>
          <p>
          People who enjoy a more mellow coffee drink with a creamy texture. It’s a perfect choice for those who prefer a milder coffee flavor that’s easy to drink and pairs well with breakfast or dessert.
          </p>
          
        </div>
        <div className=" lg:w-1/3 order-first">
          <img className="object-center mx-auto " src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
