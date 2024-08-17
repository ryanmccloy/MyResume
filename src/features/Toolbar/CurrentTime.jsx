function CurrentTime() {
  const currentTime = new Date().toLocaleTimeString();

  const formattedTime = currentTime.slice(0, currentTime.length - 3);

  return <div>{formattedTime}</div>;
}

export default CurrentTime;
