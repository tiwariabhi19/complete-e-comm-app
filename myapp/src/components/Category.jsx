import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    const res = await fetch("http://localhost:4000/categories");
    const data = await res.json();
    console.log(data);
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

  const nextSlide = () => {
    if (category.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[30px] font-bold">What’s on your mind?</div>
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

      <div className="flex overflow-x-auto sm:overflow-hidden">
        {category.map((cat, index) => (
          <div
            key={index}
            className="flex-none sm:w-[150px] w-[120px] shrink-0 duration-500 group"
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
          >
            <div className="relative w-full overflow-hidden rounded-lg group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300">
              <img
                src={"http://localhost:4000/images/" + cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Category;
