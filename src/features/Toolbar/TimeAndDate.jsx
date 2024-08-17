import CurrentDate from "./CurrentDate.jsx";
import CurrentTime from "./CurrentTime.jsx";

function TimeAndDate() {
  return (
    <div className="timeAndDateBorder flex gap-[20px] items-center px-md">
      <CurrentDate />
      <CurrentTime />
    </div>
  );
}

export default TimeAndDate;
