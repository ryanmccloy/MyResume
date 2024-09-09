import ControlledCarousel from "../../components/ControlledCarousel";
import WorkHistoryInfo from "./WorkHistoryInfo";

function Canucks() {
  return (
    <div className="flex flex-col gap-[20px] ">
      <WorkHistoryInfo title="Hospitality Supervisor" date="02/2022 - 11/2022">
        <div className="flex flex-col gap-[20px]">
          <p>
            As a Hospitality Supervisor at Rogers Arena, I supervised bar
            operations and ensured compliance with all regulations and company
            policies. My responsibilities included overseeing bartenders,
            managing customer service issues, and ensuring the smooth operation
            of multiple bars during events.
          </p>
          <p>
            I coordinated with staff to maintain high standards of service,
            addressed any operational challenges, and ensured a positive
            experience for guests. My role demanded strong leadership, excellent
            communication skills, and the ability to handle high-pressure
            situations effectively.
          </p>
        </div>
      </WorkHistoryInfo>
      <ControlledCarousel where="canucks" />
    </div>
  );
}

export default Canucks;
