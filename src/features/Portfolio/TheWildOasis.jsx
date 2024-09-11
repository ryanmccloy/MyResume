function TheWildOasis() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>Main project in Jonas Schmedtmann's Ultimate React Course.</p>
        <p>
          You can view this at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://664b187c0d17a888d45c2dc6--the-wild-oasis-practice-project.netlify.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Wild Oasis
          </a>
        </p>
        <p>
          Log in credentials:
          <br />
          Email: <code>tester@tester.com</code>
          <br />
          Password: <code>testtest</code>
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <p>
          This project was built using Vite and React, along with React Router,
          React Query, Supabase, and styled-components.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Check Guests In/Out</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Easily manage guest check-ins and check-outs through an
                intuitive interface.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. View and Manage Bookings</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                View all active and past bookings, with options to edit or
                update guest details.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Manage Cabins</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                View and edit information about the cabins, including
                availability and pricing.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Statistics Overview</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Get a detailed overview of hotel statistics, such as occupancy
                rates and revenue.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="portfolio-sectionStyling pb-[10px]">
        <h2 className="portfolio-headerStyling">Technologies Used</h2>

        <ul className="flex flex-col gap-[15px]">
          <li>
            <h3>Vite:</h3>
            <p className="portfolio-smallerText">
              Fast build tool and development server.
            </p>
          </li>
          <li>
            <h3>React:</h3>
            <p className="portfolio-smallerText">
              JavaScript library for building user interfaces.
            </p>
          </li>
          <li>
            <h3>React Router:</h3>
            <p className="portfolio-smallerText">
              A collection of navigational components for routing and page
              transitions.
            </p>
          </li>
          <li>
            <h3>React Query:</h3>
            <p className="portfolio-smallerText">
              Data-fetching library for managing server state in React
              applications.
            </p>
          </li>
          <li>
            <h3>Supabase:</h3>
            <p className="portfolio-smallerText">
              Backend services and database for managing application data.
            </p>
          </li>
          <li>
            <h3>Styled-components:</h3>
            <p className="portfolio-smallerText">
              A library for styling React components using tagged template
              literals.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TheWildOasis;
