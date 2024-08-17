function ModalHeading({ name, icon, onClose }) {
  return (
    <div className="bg-primary-blue p-sm flex justify-between">
      <div className="flex gap-[5px]">
        <img src={`icons/${icon}`} alt="icon" className="w-[25px]" />
        <p>{name}</p>
      </div>

      <button
        className="W95Border bg-primary-lightGray px-sm text-primary-darkGray"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
}

export default ModalHeading;
