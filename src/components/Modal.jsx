import ModalHeading from "./ModalHeading";

function Modal({ name, icon, children, onClose, onClick, isActive }) {
  const position = {
    "About Me": "60%",
    Portfolio: "50%",
    Education: "40%",
    "Work History": "30%",
  };

  const rightPosition = position[name] || "50%";

  return (
    <div
      className="absolute W95Border bg-primary-lightGray p-[3px] top-[20%] cursor-default"
      style={{ right: rightPosition, zIndex: isActive ? 1000 : 1 }}
      onClick={onClick}
    >
      <ModalHeading name={name} icon={icon} onClose={onClose} />
      {children}
    </div>
  );
}

export default Modal;
