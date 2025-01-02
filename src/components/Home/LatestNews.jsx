
import img from "../../assets/images/more/1000_F_294410801_4IP8l9w1LD18YHi7FUwP5nuI2MbR6th1.jpg";
import img2 from "../../assets/images/more/26.png";
import img3 from "../../assets/images/more/img_03.png";
const LatestNews = () => {
  const projectData = [
    {
      title: "Important Facts About Black coffee",
      description:
        "Today we’re taking a closer look at black coffee in its various forms, from smoky and chocolatey to bright and",
      imageLink: img2,
    },
    {
      title: "Out Top 3 Coffee This Season",
      description:
        "Today we’re taking a closer look at black coffee in its various forms, from smoky and chocolatey to bright and",

      imageLink: img,
    },
    {
      title: "Reasons to Drink Pu’erh Coffee",
      description:
        "Today we’re taking a closer look at black coffee in its various forms, from smoky and chocolatey to bright and",

      imageLink: img3,
    },
  ];
  return (
    <div>
      <div className="text-4xl text-amber-950 font-bold text-center mt-20 ">
        <h2>Latest News</h2>
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectData.map((project, index) => (
            <div key={index} className="border rounded-t-lg text-white p-5">
              <figure>
                <img
                className="w-36 mx-auto"
                  data-aos="zoom-in"
                  src={project.imageLink}
                  alt={project.title}
                />
              </figure>
              <div className="p-10">
                <h2
                  data-aos="zoom-up"
                  className="text-center text-2xl font-bold text-amber-950"
                >
                  {project.title}
                </h2>
                <p className="text-amber-950" data-aos="zoom-up">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
