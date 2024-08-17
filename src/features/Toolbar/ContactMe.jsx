import { useState } from "react";

import ContactsBox from "./ContactsBox.jsx";

function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = function () {
    setIsOpen((opened) => !opened);
  };

  return (
    <>
      {isOpen && <ContactsBox handleClose={handleOpen} />}
      <button
        className="W95Border py-sm pr-[5px] flex justify-evenly w-[150px]"
        onClick={handleOpen}
      >
        <img
          src="icons/clover-icon.png"
          alt="clover icon"
          className="w-[30px]"
        />
        <span>Contact Me</span>
      </button>
    </>
  );
}

export default ContactMe;
