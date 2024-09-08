import WorkHistoryInfo from "./WorkHistoryInfo";

function Zoe() {
  return (
    <WorkHistoryInfo
      title="Customer Support Associate"
      date="06/2023 - Present"
    >
      <div className="flex flex-col gap-[15px]">
        <p>
          In my role at Zoe Nutrition, I provide comprehensive support to
          customers experiencing issues with our app and other technical
          problems.
        </p>
        <p>
          As part of a small finance team, I also handle financial queries,
          ensuring customers accounts are in order.
        </p>

        <p>
          My responsibilities include troubleshooting technical issues,
          resolving customer inquiries, and collaborating with various
          departments to enhance the overall user experience. My role requires
          strong problem-solving skills, effective communication, and the
          ability to manage multiple tasks efficiently
        </p>

        <p>
          Working remotely, this job allowed me to dedicate my personal time to
          studying front-end development.
        </p>
      </div>
    </WorkHistoryInfo>
  );
}

export default Zoe;
