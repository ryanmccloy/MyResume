import { useEffect } from "react";
import ContactMe from "./ContactMe";
import TimeAndDate from "./TimeAndDate";

function Toolbar() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const toolbar = document.querySelector(".toolbar");
      toolbar.style.visibility = "visible";
    }, 200); // Delay by 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="toolbar bg-primary-lightGray w-screen flex justify-between p-sm border-t-2 border-primary-white">
      <ContactMe />
      <TimeAndDate />
    </div>
  );
}

export default Toolbar;
