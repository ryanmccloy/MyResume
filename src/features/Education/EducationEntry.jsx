function EducationEntry({ entry }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <div>
        <h2>{entry.id}</h2>
        <p className="text-sm italic">{entry.time}</p>
      </div>

      <div className="text-main-md">
        {entry.id !== "Udemy" ? (
          <p className="">{entry.course}</p>
        ) : (
          <div className="">
            <p>{entry.course1}</p>
            <p>{entry.course2}</p>
            <p>{entry.course3}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationEntry;
