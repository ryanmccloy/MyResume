function CurrentDate() {
  const currentDate = new Date().toLocaleDateString();

  return <div>{currentDate}</div>;
}

export default CurrentDate;
