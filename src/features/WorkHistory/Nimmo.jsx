import WorkHistoryInfo from "./WorkHistoryInfo";
import ControlledCarousel from "../../components/ControlledCarousel";

function Nimmo() {
  return (
    <div className="flex flex-col gap-[20px] ">
      <WorkHistoryInfo title="Office Coordinator" date="02/2022 - 11/2022">
        <div className="flex flex-col gap-[20px]">
          <p>
            As the remote Office Coordinator for Nimmo Bay Wilderness Resort, I
            managed reservations for high-profile guests while working from
            Vancouver. This role required meticulous attention to detail and a
            highly personalized approach, as each trip was uniquely tailored to
            the guests' needs.
          </p>
          <p>
            I collaborated daily with various departments, as well as external
            companies, to ensure seamless logistics for each experience. We used
            Google Workspace to coordinate across teams, ensuring that every
            detail was accounted for and each trip ran smoothly.
          </p>

          <p>
            Every day brought something different, and the ability to adapt
            quickly and manage multiple priorities was key to delivering
            exceptional service.
          </p>
        </div>
      </WorkHistoryInfo>
      <ControlledCarousel where="nimmo" />
    </div>
  );
}

export default Nimmo;
