import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "../../utils/fetchers";

import ControlledCarousel from "../../components/ControlledCarousel";

function AboutMe() {
  const {
    data: info,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["aboutme"],
    queryFn: () => fetchDocument("resume", "aboutme"),
  });

  const paragraphs = info ? info.info.split("newline") : [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading about me info.</p>;

  return (
    <div className="flex flex-col gap-[20px] overflow-x-hidden">
      <div className="paragraphStyling">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ControlledCarousel where="aboutme" />
    </div>
  );
}

export default AboutMe;
