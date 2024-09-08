import WorkHistoryInfo from "./WorkHistoryInfo";
import ControlledCarousel from "../../components/ControlledCarousel";

function Nimmo() {
  return (
    <div className="flex flex-col gap-[20px] ">
      <WorkHistoryInfo title="Office Coordinator" date="02/2022 - 11/2022">
        As part of the city office team for a luxury wilderness resort, I
        coordinated reservations with guests, communicating with each
        department, and planning the logistics of each trip. Many departments
        coordinated with each other to bring each trip to fruition.
      </WorkHistoryInfo>
      <ControlledCarousel where="nimmo" />
    </div>
  );
}

export default Nimmo;
