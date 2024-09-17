function HomePage({ children }) {
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
