import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";
import ModalHeading from "./ModalHeading";

function Modal({ name, icon, children, onClose, onClick, isActive }) {
  const [isDragging, setIsDragging] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const modalRef = useRef(null);

  useEffect(() => {
    const calculateBounds = () => {
      if (modalRef.current) {
        const modalRect = modalRef.current.getBoundingClientRect();
        setBounds({
          left: -modalRect.left,
          top: -modalRect.top,
          right: window.innerWidth - (modalRect.left + modalRect.width),
          bottom: window.innerHeight - (modalRect.top + modalRect.height),
        });
      }
    };

    calculateBounds();
    window.addEventListener("resize", calculateBounds);

    return () => window.removeEventListener("resize", calculateBounds);
  }, []);

  return (
    <Draggable
      handle=".modal-heading"
      cancel=".non-draggable"
      onStart={() => {
        setIsDragging(true);
        onClick();
      }}
      onStop={() => setIsDragging(false)}
      bounds={bounds}
    >
      <div
        ref={modalRef}
        className="absolute W95Border bg-primary-lightGray p-[3px] top-[20%] cursor-default max-w-[80vw] max-h-[70vh] flex flex-col gap-sm left-[15vw] sm:max-w-[50vw]"
        style={{ zIndex: isActive ? 1000 : 1 }}
        onClick={onClick}
      >
        <ModalHeading
          name={name}
          icon={icon}
          onClose={onClose}
          isDragging={isDragging}
        />
        <div className="bg-primary-white text-primary-black overflow-y-auto p-sm">
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default Modal;
