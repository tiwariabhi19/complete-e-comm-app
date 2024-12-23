import { useEffect, useRef, useState } from "react";
import Cards from "./Cards";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto" ref={componentRef}>
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Mumbai
        </div>
      </div>

      {/* Sticky Header */}
      <div
        className={`${
          isSticky
            ? "fixed top-0 z-[999999999] bg-white w-full left-0 shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3">
          <div className="p-3 rounded-md shadow hover:bg-[#f1f1f1] cursor-pointer transition-all">
            Filter
          </div>
          <div className="p-3 rounded-md shadow hover:bg-[#f1f1f1] cursor-pointer transition-all">
            Sort By
          </div>
        </div>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((d, i) => (
          <div
            key={i}
            className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-md"
          >
            <Cards {...d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineDelivery;
