function MagicBall() {
  return (
    <div className="paragraphStyling">
      <p className="italic text-main-sm">
        Personal project completed using vanilla JavaScript
      </p>
      <p>
        This can be accessed at:{" "}
        <a
          className="hover:text-primary-blue hover:cursor-pointer transition-colors duration-200 text-decoration-line: underline underline-offset-4"
          href=" https://magic-8-ball-dun.vercel.app/"
          target="_blank"
        >
          Magic 8 Ball
        </a>
      </p>

      <p>
        Welcome to the Magic 8-Ball App! Unsure about a decision or curious
        about the future? Just ask a question, click on the Magic 8-Ball, and
        reveal the answer the universe has for you.
      </p>

      <p>
        Features Intuitive Design: Simple and clean UI that offers an authentic
        Magic 8-Ball experience. Randomized Answers: Various responses ranging
        from positive, negative to neutral to keep you guessing. Mobile
        Responsive: Works seamlessly on desktops, tablets, and mobile devices.
      </p>

      <p>
        How to Use Ask the 8-ball a question. Hold the Magic 8-Ball image. Read
        the answer and contemplate its cosmic wisdom. Repeat whenever you're in
        doubt!
      </p>
    </div>
  );
}

export default MagicBall;
