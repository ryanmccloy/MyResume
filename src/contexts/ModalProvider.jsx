import { createContext, useContext, useState } from "react";

import AboutMe from "../features/AboutMe/AboutMe";
import Education from "../features/Education/Education";
import WorkHistoy from "../features/WorkHistory/WorkHistoy";
import Nimmo from "../features/WorkHistory/Nimmo";
import Canucks from "../features/WorkHistory/Canucks";
import Zoe from "../features/WorkHistory/Zoe";
import Peaks from "../features/WorkHistory/Peaks";
import Portfolio from "../features/Portfolio/Portfolio";
import ParadisePaddles from "../features/Portfolio/ParadisePaddles";
import MagicBall from "../features/Portfolio/MagicBall";
import ShoppingList from "../features/Portfolio/ShoppingList";
import FullyFuelled from "../features/Portfolio/FullyFuelled";
import PizzaApp from "../features/Portfolio/PizzaApp";
import TheWildOasis from "../features/Portfolio/TheWildOasis";
import TravelApp from "../features/Portfolio/TravelApp";
import MoviesApp from "../features/Portfolio/MoviesApp";

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
  ball: {
    name: "8-Ball",
    icon: "8-ball-icon.png",
  },
  paradise: {
    name: "Paradise Paddles",
    icon: "pp-icon.png",
  },
  shopping: {
    name: "Shopping List",
    icon: "shopping-icon.png",
  },
  fuelled: {
    name: "Fully Fuelled",
    icon: "ff-icon.png",
  },
  pizza: {
    name: "Pizza App",
    icon: "pizza-icon.png",
  },
  oasis: {
    name: "The Wild Oasis",
    icon: "wild-oasis-icon.png",
  },
  travel: {
    name: "Travel App",
    icon: "travel-icon.png",
  },
  movie: {
    name: "Movie App",
    icon: "movies-icon.png",
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
    paradise: false,
    ball: false,
    shopping: false,
    fuelled: false,
    pizza: false,
    oasis: false,
    travel: false,
    movie: false,
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
        return <Portfolio />;
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
      case "paradise":
        return <ParadisePaddles />;
      case "ball":
        return <MagicBall />;
      case "shopping":
        return <ShoppingList />;
      case "fuelled":
        return <FullyFuelled />;
      case "pizza":
        return <PizzaApp />;
      case "oasis":
        return <TheWildOasis />;
      case "travel":
        return <TravelApp />;
      case "movie":
        return <MoviesApp />;
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
