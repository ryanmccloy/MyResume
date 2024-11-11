function ModalIcon({ name, icon, onClick, where }) {
  const nameStyles = {
    "Movie App": "ml-[15px] w-[55px] mb-[10px]",
    "Travel App": "ml-[10px] w-[65px]",
    "The Wild Oasis": "ml-[10px] w-[70px] mb-[-5px]",
    "Nimmo Bay": "mb-[10px]",
    "Fully Fuelled": "w-[75px] ",
    "Weather App": "mb-[15px] mt-[5px]",
    "8-Ball": "w-[65px] mb-[5px] mt-[3px]",
    "I'm Bored": "w-[75px]",
    "Pizza App": "w-[65px]",
  };

  const imgSizeClass = where === "work" ? "w-[70px]" : "w-[50px]";
  const nameSpecificClass = nameStyles[name] || ""; // Default to empty string if no match

  return (
    <div
      className={`flex flex-col items-center max-w-[100px] hover:cursor-pointer hover:scale-105 hover:text-primary-blue transition-all duration-400 ${nameSpecificClass}`}
      onClick={onClick}
    >
      <img
        src={`icons/${icon}`}
        alt="icon"
        className={`${imgSizeClass} ${nameSpecificClass}`}
      />
      <p className="text-center">{name}</p>
    </div>
  );
}

export default ModalIcon;
