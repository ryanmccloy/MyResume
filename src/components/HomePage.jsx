import { useEffect } from "react";

function HomePage({ children }) {
  useEffect(() => {
    const forceRepaint = () => {
      document.documentElement.style.display = "none";
      document.documentElement.offsetHeight; // Trigger reflow
      document.documentElement.style.display = "";
    };

    window.addEventListener("load", forceRepaint);

    return () => window.removeEventListener("load", forceRepaint);
  }, []);

  return (
    <div
      className="bg-primary-turqouise font-W95 text-main-md tracking-wide h-[calc(100dvh)] flex flex-col justify-between
    "
    >
      {children}
    </div>
  );
}

export default HomePage;
