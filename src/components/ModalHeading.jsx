function ModalHeading({ name, icon, onClose, isDragging }) {
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Preventing drag event from being triggered
    onClose();
  };

  return (
    <div
      className={`bg-primary-blue p-sm flex justify-between modal-heading ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div className="flex gap-[5px]">
        <img src={`icons/${icon}`} alt="icon" className="w-[25px]" />
        <p className="text-primary-white tracking-wider">{name}</p>
      </div>

      <button
        className="W95Border bg-primary-lightGray px-sm text-primary-darkGray non-draggable hover:text-primary-black transition-all duration-400"
        onClick={handleButtonClick}
      >
        X
      </button>
    </div>
  );
}

export default ModalHeading;
