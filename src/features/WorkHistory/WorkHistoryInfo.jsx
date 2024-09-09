function WorkHistoryInfo({ title, date, children }) {
  return (
    <div className="paragraphStyling ">
      <div>
        <h2>{title}r</h2>
        <p className="text-sm italic">{date}</p>
      </div>

      <p className="text-main-md tracking-wider">{children}</p>
    </div>
  );
}

export default WorkHistoryInfo;
