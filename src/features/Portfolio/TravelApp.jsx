function TravelApp() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>
          -This is a project piece that was completed as part of an Ultimate
          React Course-
        </p>
        <p>
          You can view this repository at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://github.com/ryanmccloy/Travel-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Travel Tracker App
          </a>
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">
          How to View and Test the Portfolio Piece
        </h2>
        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Download the Repository</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Download the repository from GitHub and click the "Code" button,
                then select "Download ZIP".
              </li>
            </ul>
          </li>
          <li>
            <h3>2. Install Dependencies</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Run the following command to install the necessary dependencies:
                <br />
                <code>npm install</code>
              </li>
            </ul>
          </li>
          <li>
            <h3>3. Start the Mock Server</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Run the JSON server to serve the cities.json file:
                <br />
                <code>npm run server</code>
              </li>
            </ul>
          </li>
          <li>
            <h3>4. Start the Development Server</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                In a new terminal window, start the Vite development server:
                <br />
                <code>npm run dev</code>
              </li>
            </ul>
          </li>
          <li>
            <h3>5. View the Application</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Open your browser and navigate to http://localhost:5173 to view
                and test the application.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Overview</h2>
        <p>
          The Travel Tracker App is a React-based web application developed with
          Vite, designed to help users keep track of places they have visited.
          Users can easily add, view, and manage their travel history, creating
          a personalized travel diary. This project serves as a course piece,
          showcasing practical application of React and Vite in building
          interactive web applications.
        </p>
      </div>

      <div className="portfolio-sectionStyling pb-[10px]">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>
        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. useReducer Hook</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Provides complex state logic management for handling multiple
                states.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Context API</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Enables state sharing across different components in the app.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Async Actions</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Handles asynchronous data fetching and updates the state
                accordingly.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Error Handling</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Gracefully manages errors within the reducer and shows
                appropriate feedback to the user.
              </li>
            </ul>
          </li>

          <li>
            <h3>5. Add Visited Places</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can add locations they have visited along with dates and
                additional notes.
              </li>
            </ul>
          </li>

          <li>
            <h3>6. View Travel History</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                A comprehensive list or map view of all the places visited.
              </li>
            </ul>
          </li>

          <li>
            <h3>7. Edit and Delete Entries</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can modify or remove their travel entries easily.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default TravelApp;
