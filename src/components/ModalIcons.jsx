import { useResumeModalContext } from "../contexts/ModalProvider";
import ModalIcon from "./ModalIcon";

function ModalIcons({ where }) {
  const { toggleModal, resumeModals } = useResumeModalContext();

  return (
    <div
      className={` ${
        where === "homepage"
          ? "text-primary-white w-fit grid grid-cols-2 "
          : "text-primary-black w-fit grid grid-cols-2 pb-[20px] custom-sm:flex sm:flex-wrap sm:pr-[40px] "
      } pl-[20px] pr-[20px] pt-[30px] gap-[40px] text-main-md `}
    >
      {Object.entries(resumeModals).map(([key, info]) => {
        if (
          (where === "homepage" &&
            ["about", "portfolio", "education", "work"].includes(key)) ||
          (where === "work" &&
            ["zoe", "nimmo", "canucks", "peaks"].includes(key)) ||
          (where === "personalportfolio" &&
            ["paradise", "ball", "weather", "fuelled"].includes(key)) ||
          (where === "courseportfolio" &&
            ["pizza", "oasis", "travel", "movie"].includes(key))
        ) {
          return (
            <div key={key}>
              <ModalIcon
                name={info.name}
                icon={info.icon}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleModal(key);
                }}
                where={where}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ModalIcons;
