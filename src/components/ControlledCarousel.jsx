import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

function ImageCarousel() {
  const settings = {
    dots: false, // Show navigation dots
    arrows: true,
    infinite: true, // Infinite loop scrolling
    speed: 600, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    variableWidth: true, // Allows each slide to have a variable width
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={`/Images/About Me/${image}.jpg`}
            alt={`Image ${index + 1}`}
            className="h-[200px] pr-1"
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageCarousel;
