import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const aboutMeImages = [
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

const nimmoImages = [
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
];

const peaksImages = ["1", "2", "3", "4", "5", "6"];

const canucksImages = ["1", "2", "3", "4", "5"];

function ControlledCarousel({ where }) {
  const settings = {
    dots: false, // Show navigation dots
    arrows: true,
    infinite: true, // Infinite loop scrolling
    speed: 600, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    variableWidth: true, // Allows each slide to have a variable width
  };

  const images =
    where === "aboutme"
      ? aboutMeImages
      : where === "nimmo"
      ? nimmoImages
      : where === "canucks"
      ? canucksImages
      : where === "peaks"
      ? peaksImages
      : [];

  const fileType =
    where === "aboutme"
      ? "jpg"
      : where === "nimmo"
      ? "png"
      : where === "canucks"
      ? "png"
      : where === "peaks"
      ? "png"
      : [];

  return (
    images.length > 0 && (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`/Images/${where}/${image}.${fileType}`}
              alt={`Image ${index + 1}`}
              className={` pr-1 ${
                where === "canucks" || where === "peaks"
                  ? "h-[150px]"
                  : "h-[200px]"
              }`}
            />
          </div>
        ))}
      </Slider>
    )
  );
}

export default ControlledCarousel;
