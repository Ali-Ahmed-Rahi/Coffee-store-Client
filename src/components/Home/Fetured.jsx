import { FaAward, FaCoffee, FaFire, FaLeaf } from "react-icons/fa";

const Fetured = () => {
  const features = [
    {
      icon: <FaCoffee className="text-2xl lg:text-4xl text-amber-950" />,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      icon: <FaAward className="text-2xl lg:text-4xl text-amber-950" />,
      title: "High Quality",
      description: "We serve the coffee to you maintaining the best quality",
    },
    {
      icon: <FaLeaf className="text-2xl lg:text-4xl text-amber-950" />,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      icon: <FaFire className="text-2xl lg:text-4xl text-amber-950" />,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div className="bg-[#F1E6C6] lg:py-8">
      <div className="container mx-auto grid grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="lg:text-lg lg:font-semibold text-amber-950 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-amber-950 hidden lg:block">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetured;
