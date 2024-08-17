import { PiCopySimple } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import { useState } from "react";

const contactActions = {
  Email: {
    icon: PiCopySimple,
    action: (contactString) => navigator.clipboard.writeText(contactString),
  },
  Phone: {
    icon: PiCopySimple,
    action: (contactString) => navigator.clipboard.writeText(contactString),
  },
  LinkedIn: {
    icon: GoLinkExternal,
    action: (link) => window.open(link, "_blank"),
    link: "https://www.linkedin.com/in/ryan-mccloy-70340684/",
  },
  Github: {
    icon: GoLinkExternal,
    action: (link) => window.open(link, "_blank"),
    link: "https://github.com/ryanmccloy?tab=repositories",
  },
};

function ContactInfo({ contactString, contactType }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = function () {
    setIsHovered((h) => !h);
  };

  const handleClick = function (e) {
    e.stopPropagation();
  };

  const handleActionClick = function (e) {
    e.stopPropagation();
    const actionInfo = contactActions[contactType];
    if (contactType === "LinkedIn" || contactType === "Github") {
      actionInfo.action(actionInfo.link);
    } else {
      actionInfo.action(contactString);
    }
  };

  const Icon = contactActions[contactType].icon;

  return (
    <div
      className={`W95Border bg-primary-lightGray p-md absolute left-[150px] w-max flex items-center gap-[15px] cursor-default text-primary-black ${
        isHovered ? "text-primary-blue transition-colors duration-200" : ""
      }`}
      onClick={handleClick}
    >
      <span>{contactString}</span>

      <span
        className="cursor-pointer"
        onClick={handleActionClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Icon />
      </span>
    </div>
  );
}

export default ContactInfo;
