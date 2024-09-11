function FullyFuelled() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>
          This is a travel planning app that utilizes the Google Maps API. It
          was built using vanilla JavaScript.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <p>
          You can view this repository at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://github.com/ryanmccloy/FullyFuelled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fully Fuelled
          </a>
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Travel Planner 🌍</h2>
        <p>
          A web application that helps users plan their trips by allowing them
          to search for locations, mark them on a map, and make notes about each
          location.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">
          How to View and Test the Project
        </h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Download the Repository</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Download the repository from GitHub: Click the "Code" button and
                select "Download ZIP".
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Install Dependencies</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Run the following command to install live-server:
                <br />
                <code>npm install</code>
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Set Up Google Maps API Key</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Obtain a Google Maps API key from the Google Cloud Console.
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                Create a file named Config.js in the root directory of the
                project.
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                Add your Google Maps API key to the Config.js file as follows:
                <br />
                <code>const MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";</code>
                <br />
                <code>export default MAPS_API_KEY;</code>
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Start the Development Server</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Start the development server:
                <br />
                <code>npm start</code>
                <br />
                This command will start a live server on{" "}
                <code>http://localhost:8080</code> (or another port if 8080 is
                in use).
              </li>
            </ul>
          </li>

          <li>
            <h3>5. View the Application</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Open your web browser and navigate to{" "}
                <code>http://localhost:8080</code> to view and test the
                application.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="portfolio-sectionStyling pb-[10px]">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>
        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. User Authentication</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Sign up, log in, and sign out functionality.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Dynamic Map Integration</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Allows users to search for a location and view it on a map.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Interactive Map</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can click on the map to add markers and make notes about
                specific locations.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Personalized Experience</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Registered users can save their trip plans and markers for
                future reference.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default FullyFuelled;
