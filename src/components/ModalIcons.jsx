import { useResumeModalContext } from "../contexts/ModalProvider";
import ModalIcon from "./ModalIcon";
import Modal from "./Modal";

function ModalIcons() {
  const {
    openModals,
    toggleModal,
    activeModal,
    bringModalToFront,
    resumeModals,
    renderModalContent,
  } = useResumeModalContext();

  return (
    <div className="text-primary-white pl-[20px] pt-[30px] w-fit grid grid-cols-2 gap-[40px]">
      {Object.entries(resumeModals).map(([key, info]) => (
        <div key={key}>
          <ModalIcon
            name={info.name}
            icon={info.icon}
            onClick={() => toggleModal(key)}
          />
          {openModals[key] && (
            <Modal
              onClick={() => bringModalToFront(key)}
              isActive={activeModal === key}
              onClose={() => toggleModal(key)}
              name={info.name}
              icon={info.icon}
            >
              {renderModalContent(key)}
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}

export default ModalIcons;

// Modal content
// Draggable icons?
// If so, double click to open, single click and hold to drag
// Resizing Modal windows?
// Draggable modal windows
