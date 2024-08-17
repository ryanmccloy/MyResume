import { IoMdArrowDropright } from "react-icons/io";
import ContactInfo from "./ContactInfo";

const iconName = {
  Email: "email",
  Phone: "phone",
  LinkedIn: "linkedin",
  Github: "github",
};

function Contact({
  contactType,
  contactString,
  activeContact,
  setActiveContact,
}) {
  let isActive = activeContact === contactType;

  const handleClick = function () {
    if (!isActive) {
      setActiveContact(contactType);
    } else {
      setActiveContact(null);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative p-md flex justify-between items-center transition-colors duration-200 ${
        isActive
          ? "bg-primary-blue text-primary-white"
          : "bg-transparent text-black"
      }`}
    >
      <div className="flex gap-[10px]">
        <img
          src={`icons/${iconName[contactType]}.png`}
          alt="contact icon"
          className="w-[25px]"
        />
        <span>{contactType}</span>
      </div>
      <IoMdArrowDropright />

      {isActive && (
        <ContactInfo contactString={contactString} contactType={contactType} />
      )}
    </button>
  );
}

export default Contact;
