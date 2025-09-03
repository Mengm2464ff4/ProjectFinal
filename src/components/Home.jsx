import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
    title: "New Arrivals",
    subtitle: "Upgrade your style with the latest collection",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1600",
    title: "Exclusive Deals",
    subtitle: "Up to 50% off on selected items",
    buttonText: "Discover Deals",
  },
  {
    id: 3,
    image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600",
    title: "Tech Essentials",
    subtitle: "Latest gadgets to simplify your life",
    buttonText: "Explore Now",
  },
  {
    id: 4,
    image:"https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600",
    title: "Summer Collection",
    subtitle: "Fresh styles to keep you cool this season",
    buttonText: "Browse Now",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div  key={slide.id} className="w-full flex-shrink-0 h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"/>
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-white text-black font-semibold px-8 py-3 rounded-xl shadow-xl hover:bg-gray-200 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 text-white text-3xl font-bold p-4 rounded-full hover:bg-black/60 transition" >  ‹
      </button>

      {/* Next Button */}
      <button onClick={nextSlide}  className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 text-white text-3xl font-bold p-4 rounded-full hover:bg-black/60 transition" >  ›
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-4 h-4 rounded-full
             ${index === current ? "bg-white" : "bg-gray-400"}`}>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
