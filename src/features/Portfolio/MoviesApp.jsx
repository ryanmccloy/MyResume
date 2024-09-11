function MoviesApp() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>-This is a project piece as part of The Ultimate React Course-</p>
        <p>
          You can view this repository at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://github.com/ryanmccloy/Movie-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            usePopcorn App
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
            <h3>3. Start the Development Server</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Start the React development server:
                <br />
                <code>npm start</code>
              </li>
            </ul>
          </li>
          <li>
            <h3>4. View the Application</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Open your browser and navigate to http://localhost:3000 to view
                and test the application.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Overview</h2>
        <p>
          The usePopcorn app is a dynamic web application for movie enthusiasts.
          It allows users to search for movies, view details, and manage a
          personalized list of watched movies. This app utilizes React hooks and
          custom hooks to fetch and display movie data from the OMDb API.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>
        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Movie Search</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can search for movies using the OMDb API.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Movie Details</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Clicking on a movie in the search results displays detailed
                information about the movie.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Watched Movies List</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can add movies to their watched list and see a summary of
                their watched movies, including average ratings and runtime.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default MoviesApp;
