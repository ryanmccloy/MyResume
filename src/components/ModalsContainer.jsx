import Modal from "./Modal";
import { useResumeModalContext } from "../contexts/ModalProvider";

function ModalsContainer() {
  const {
    openModals,
    activeModal,
    toggleModal,
    bringModalToFront,
    renderModalContent,
    resumeModals,
  } = useResumeModalContext();

  return (
    <>
      {Object.entries(openModals).map(([key, isOpen]) => {
        if (isOpen) {
          return (
            <Modal
              key={key}
              name={resumeModals[key].name}
              icon={resumeModals[key].icon}
              isActive={activeModal === key}
              onClick={() => bringModalToFront(key)}
              onClose={() => toggleModal(key)}
            >
              {renderModalContent(key)}
            </Modal>
          );
        }
        return null;
      })}
    </>
  );
}

export default ModalsContainer;
