import { useState } from "react";

import ModalIcon from "./ModalIcon";
import Modal from "./Modal";

const resumeModals = {
  about: {
    name: "About Me",
    icon: "about-me.png",
  },
  portfolio: {
    name: "Portfolio",
    icon: "portfolio.png",
  },
  education: {
    name: "Education",
    icon: "education.png",
  },
  work: {
    name: "Work History",
    icon: "work-history.png",
  },
};

function ModalIcons() {
  const [openModals, setOpenModals] = useState({
    about: false,
    portfolio: false,
    education: false,
    work: false,
  });

  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = function (key) {
    setOpenModals((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const bringModalToFront = function (key) {
    setActiveModal(key);
  };

  const renderModalContent = function (key) {
    switch (key) {
      case "about":
        return <div>About Me Content</div>;
      case "portfolio":
        return <div>Portfolio Content</div>;
      case "education":
        return <div>Education Content</div>;
      case "work":
        return <div>Work History Content</div>;
      default:
        return null;
    }
  };

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
