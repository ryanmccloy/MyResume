import { createContext, useContext, useState } from "react";

import AboutMe from "../features/AboutMe/AboutMe";
import Education from "../features/Education/Education";
import WorkHistoy from "../features/WorkHistory/WorkHistoy";
import Nimmo from "../features/WorkHistory/Nimmo";
import Canucks from "../features/WorkHistory/Canucks";
import Zoe from "../features/WorkHistory/Zoe";
import Peaks from "../features/WorkHistory/Peaks";

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
  zoe: {
    name: "Zoe Personalised Nutrition",
    icon: "zoe-icon.png",
  },
  nimmo: {
    name: "Nimmo Bay",
    icon: "nimmobay.png",
  },
  canucks: {
    name: "Canucks Entertainment",
    icon: "canucks-icon.png",
  },
  peaks: {
    name: "Peaks Hotel and Suites",
    icon: "peaks-icon.png",
  },
};

export const ModalProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState({
    about: false,
    portfolio: false,
    education: false,
    work: false,
    zoe: false,
    nimmo: false,
    canucks: false,
    peaks: false,
  });

  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = function (key) {
    setOpenModals((prevState) => {
      const isOpening = !prevState[key];

      if (isOpening) {
        bringModalToFront(key);
      }

      return {
        ...prevState,
        [key]: !prevState[key],
      };
    });
  };

  const bringModalToFront = function (key) {
    setActiveModal(key);
  };

  const renderModalContent = function (key) {
    switch (key) {
      case "about":
        return <AboutMe />;
      case "portfolio":
        return <div>Portfolio Content</div>;
      case "education":
        return <Education />;

      case "work":
        return <WorkHistoy />;
      case "zoe":
        return <Zoe />;
      case "nimmo":
        return <Nimmo />;
      case "canucks":
        return <Canucks />;
      case "peaks":
        return <Peaks />;
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
