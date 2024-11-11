function Bored() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>
          You can view this at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href=" https://im-bored-app.vercel.app/"
            target="_blank"
          >
            I&apos;m Bored
          </a>
        </p>

        <p>
          The <span className="font-semibold">I&apos;m Bored App</span> is a
          simple tool designed to help users find something fun to do when
          boredom strikes! By integrating with the Bored API, users can search
          for activities based on activity type, number of participants, or just
          hit the &quot;Surprise Me&quot; button for a random idea.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Search by Activity Type</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can select from various types of activities (e.g.,
                recreational, educational, social) to find something they’re
                interested in doing.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Search by Number of Participants</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Enter the number of people involved, whether you're flying solo
                or with friends, and find activities suited to the group size.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Surprise Me</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Feeling spontaneous? Click "Surprise Me" to get a random
                activity suggestion!
              </li>
            </ul>
          </li>

          <li>
            <h3>4. State Management with useContext</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Clean and modern interface designed with Tailwind CSS for a
                responsive and visually appealing user experience.
              </li>
            </ul>
          </li>
          <li>
            <h3>5. Styled with Tailwind CSS</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                The app is fully responsive and works on different screen sizes
                and devices.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div id="features" className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Usage</h2>

        <ol className="portfolio-olStyling">
          <li>
            <h3>1. Choose an Activity Type</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Use the dropdown to select a specific type of activity.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Alternatively Specify Participants</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Input the number of participants.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Surprise Me!</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Click the "Surprise Me" button for a random suggestion if you’re
                open to any activity.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Results Display</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                The app will display an activity suggestion based on your chosen
                filters or the random selection.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div id="technologies" className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Technologies</h2>

        <ul className="portfolio-ulStyling">
          <li>
            <h3>Vite:</h3>
            <p className="portfolio-smallerText">
              Fast build tool and development server
            </p>
          </li>
          <li>
            <h3>React:</h3>
            <p className="portfolio-smallerText">
              Built with functional components and useContext for state
              management.
            </p>
          </li>
          <li>
            <h3>Tailwind CSS:</h3>
            <p className="portfolio-smallerText">
              Used for styling the UI in a responsive and modern layout.
            </p>
          </li>
          <li>
            <h3>Bored API:</h3>
            <p className="portfolio-smallerText">
              Used for styling the UI in a responsive and modern layout.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bored;
