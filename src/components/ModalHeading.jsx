function ModalHeading({ name, icon, onClose, isDragging }) {
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Preventing drag event from being triggered
    onClose();
  };

  return (
    <div
      className={`bg-primary-blue p-sm flex justify-between modal-heading cursor-${
        isDragging ? "grabbing" : "grab"
      }`}
    >
      <div className="flex gap-[5px]">
        <img src={`icons/${icon}`} alt="icon" className="w-[25px]" />
        <p>{name}</p>
      </div>

      <button
        className="W95Border bg-primary-lightGray px-sm text-primary-darkGray non-draggable"
        onClick={handleButtonClick}
      >
        X
      </button>
    </div>
  );
}

export default ModalHeading;
