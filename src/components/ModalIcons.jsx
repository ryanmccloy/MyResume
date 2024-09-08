import { useResumeModalContext } from "../contexts/ModalProvider";
import ModalIcon from "./ModalIcon";
import Modal from "./Modal";

function ModalIcons({ where }) {
  const {
    openModals,
    toggleModal,
    activeModal,
    bringModalToFront,
    resumeModals,
    renderModalContent,
  } = useResumeModalContext();

  return (
    <div
      className={` ${
        where === "homepage"
          ? "text-primary-white w-fit grid grid-cols-2 "
          : "text-primary-black  w-fit grid grid-cols-2 pb-[20px] sm:flex sm:flex-wrap  sm:pr-[40px] "
      } pl-[20px] pr-[20px] pt-[30px] gap-[40px] text-main-md `}
    >
      {Object.entries(resumeModals).map(([key, info]) => {
        if (
          where === "homepage" &&
          (key === "about" ||
            key === "portfolio" ||
            key === "education" ||
            key === "work")
        ) {
          return (
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
          );
        } else if (
          where === "work" &&
          (key === "zoe" ||
            key === "nimmo" ||
            key === "canucks" ||
            key === "peaks")
        ) {
          return (
            <div key={key}>
              <ModalIcon
                name={info.name}
                icon={info.icon}
                onClick={() => toggleModal(key)}
                where={where}
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
          );
        }

        return null;
      })}
    </div>
  );
}

export default ModalIcons;
