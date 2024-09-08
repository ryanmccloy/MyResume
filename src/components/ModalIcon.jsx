function ModalIcon({ name, icon, onClick, where }) {
  return (
    <div
      className="flex flex-col items-center max-w-[100px]  hover:cursor-pointer hover:scale-105 hover:text-primary-blue transition-all duration-400"
      onClick={onClick}
    >
      <img
        src={`icons/${icon}`}
        alt="icon"
        className={`${where === "work" ? "w-[70px]" : "w-[50px] "} ${
          name === "Nimmo Bay" && "mb-[10px]"
        }`}
      />
      <p className="text-center">{name}</p>
    </div>
  );
}

export default ModalIcon;
