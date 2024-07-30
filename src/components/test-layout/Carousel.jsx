import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Image1 from "../../assets/image1.svg";
import Image2 from "../../assets/image2.svg";
import Image3 from "../../assets/image3.svg";

export default function Carousel() {
  const photos = [Image1, Image2, Image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1440px] h-[361px] lg:h-[504px] md:h-[320px] w-full m-auto relative">
      <div
        style={{ backgroundImage: `url(${photos[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      />
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronLeft size={20} />
      </div>

      <div className="absolute top-[50%] left-1/2 -transform -translate-x-1/2 -translate-y-1/2 text-white">
        <p className="lg:text-4xl md:text-3xl text-lg font-bold">Frontend</p>
        <p className="lg:text-4xl md:text-3xl text-lg font-bold">— Mockup</p>
      </div>

      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronRight size={20} />
      </div>
    </div>
  );
}
