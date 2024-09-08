function WorkHistoryInfo({ title, date, children }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <h2>{title}r</h2>
        <p className="text-sm italic">{date}</p>
      </div>

      <p className="text-main-md">{children}</p>
    </div>
  );
}

export default WorkHistoryInfo;
