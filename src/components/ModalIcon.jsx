function ModalIcon({ name, icon, onClick }) {
  return (
    <div
      className="flex flex-col items-center hover:cursor-pointer hover:scale-105 hover:text-primary-blue transition-all duration-400"
      onClick={onClick}
    >
      <img src={`icons/${icon}`} alt="icon" className="w-[50px] " />
      <p>{name}</p>
    </div>
  );
}

export default ModalIcon;
