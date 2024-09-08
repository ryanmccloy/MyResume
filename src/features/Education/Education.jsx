import { useQuery } from "@tanstack/react-query";
import { fetchEducationEntries } from "../../utils/fetchers";

import EducationEntry from "./EducationEntry";

function Education() {
  const {
    data: info,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["education"],
    queryFn: () => fetchEducationEntries(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-[30px] pb-[10px] pr-[40px]">
      {info.map((entry) => (
        <EducationEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default Education;
