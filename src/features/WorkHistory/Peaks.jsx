import ControlledCarousel from "../../components/ControlledCarousel";
import WorkHistoryInfo from "./WorkHistoryInfo";

function Peaks() {
  return (
    <div className="flex flex-col gap-[20px] ">
      <WorkHistoryInfo title="Front Office Supervisor" date="06/2021 - 01/2022">
        <div className="flex flex-col gap-[20px]">
          <p>
            As a Front Desk Supervisor at Peaks Hotel and Suites in Banff, I
            managed front desk operations to ensure a seamless guest experience.
            My responsibilities included checking guests in and out, handling
            difficult guest situations, and improving overall guest
            satisfaction.
          </p>
          <p>
            I responded to and forwarded emails, managed the phone line, created
            staff schedules, and trained new hires. Additionally, I coordinated
            day-to-day activities with other departments to ensure smooth
            operations throughout the hotel.
          </p>

          <p>
            My role required excellent communication skills, strong
            organizational abilities, and a commitment to providing exceptional
            customer service.
          </p>
        </div>
      </WorkHistoryInfo>
      <ControlledCarousel where="peaks" />
    </div>
  );
}

export default Peaks;
