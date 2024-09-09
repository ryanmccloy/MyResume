import ModalIcons from "../../components/ModalIcons";

function Portfolio() {
  return (
    <div className="flex flex-col gap-[60px] pt-[20px]">
      <div>
        <h2 className="text-decoration-line: underline underline-offset-4 pl-[20px]">
          Personal Portfolio
        </h2>
        <ModalIcons where="personalportfolio" />
      </div>
      <div>
        <h2 className="text-decoration-line: underline underline-offset-4 pl-[20px]">
          Courses Portfolio
        </h2>
        <ModalIcons where="courseportfolio" />
      </div>
    </div>
  );
}

export default Portfolio;
