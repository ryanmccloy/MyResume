import ContactMe from "./ContactMe";
import TimeAndDate from "./TimeAndDate";

function Toolbar() {
  return (
    <div className="toolbar bg-primary-lightGray w-screen flex justify-between p-sm border-t-2 border-primary-white">
      <ContactMe />
      <TimeAndDate />
    </div>
  );
}

export default Toolbar;
