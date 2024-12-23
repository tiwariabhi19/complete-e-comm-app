import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Cards from "./Cards";

const TopRest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0); // State for slide position

  const fetchTopRestaurants = async () => {
    try {
      const res = await fetch("http://localhost:4000/top-restaurant-chains");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurants();
  }, []); // Empty dependency array ensures fetch runs only once on mount

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 3);
  };

  const nextSlide = () => {
    if (slide >= data.length - 4) return;
    setSlide(slide + 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto mb-[100px]">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[30px] font-bold">
          Top restaurant chains in Mumbai
        </div>
        <div className="flex">
          <div
            className="cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div
          className="flex gap-x-5 transition-transform duration-500"
          style={{
            transform: `translateX(-${slide * 270}px)`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[270px] sm:w-[200px] md:w-[220px] lg:w-[270px]"
            >
              <div className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-md overflow-hidden">
                <Cards {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default TopRest;
