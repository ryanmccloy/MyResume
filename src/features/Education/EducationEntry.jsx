function EducationEntry({ entry }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <div>
        <h2>{entry.id}</h2>
        <p className="text-xs italic">{entry.time}</p>
      </div>

      <div>
        {entry.id !== "Udemy" ? (
          <p className="text-sm">{entry.course}</p>
        ) : (
          <div className="text-sm">
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
