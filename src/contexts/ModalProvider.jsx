import { createContext, useContext, useState } from "react";

const ResumeModalContext = createContext();

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

export const ModalProvider = ({ children }) => {
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
    <ResumeModalContext.Provider
      value={{
        openModals,
        toggleModal,
        activeModal,
        bringModalToFront,
        resumeModals,
        renderModalContent,
      }}
    >
      {children}
    </ResumeModalContext.Provider>
  );
};

export const useResumeModalContext = () => useContext(ResumeModalContext);
