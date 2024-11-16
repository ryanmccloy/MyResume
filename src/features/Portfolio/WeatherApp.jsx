function WeatherApp() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>Personal Project</p>
        <p>
          You can view this at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://my-weather-app-git-main-ryan-mccloys-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Weather App
          </a>
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <p>
          This is a responsive weather application built using React and Vite,
          styled with Tailwind CSS, and deployed on Vercel. The app allows users
          to search for any location and get real-time weather information,
          including the current temperature, sunrise and sunset times, and a
          5-day weather forecast. The app utilizes the Tomorrow.io Weather API
          for weather data and TimeAPI.io to handle timezone data.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Search by location</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Users can search for any location worldwide to retrieve weather
                data.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Real-time weather</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Displays the current temperature for the searched location.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Sunrise and sunset times</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Shows today&apos;s sunrise and sunset times for the selected
                location.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. 5-day forecast</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Provides a 5-day forecast with daily high and low temperatures.
              </li>
            </ul>
          </li>
          <li>
            <h3>5. Responsive design</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                The app is fully responsive and works on different screen sizes
                and devices.
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
              Lightning-fast bundler and development server for modern web
              applications.
            </p>
          </li>
          <li>
            <h3>React:</h3>
            <p className="portfolio-smallerText">
              Front-end framework to build the user interface.
            </p>
          </li>
          <li>
            <h3>Tailwind CSS:</h3>
            <p className="portfolio-smallerText">
              Utility-first CSS framework for styling.
            </p>
          </li>
          <li>
            <h3>Vercel:</h3>
            <p className="portfolio-smallerText">
              Hosting and deployment platform.
            </p>
          </li>
          <li>
            <h3>Tomorrow.io Weather API:</h3>
            <p className="portfolio-smallerText">
              For fetching real-time weather data.
            </p>
          </li>
          <li>
            <h3>TimeAPI.io:</h3>
            <p className="portfolio-smallerText">
              For fetching timezone data based on location.
            </p>
          </li>
        </ul>
      </div>
      <div className="portfolio-sectionStyling pb-[10px]">
        <h2 className="portfolio-headerStyling">State Management</h2>
        <p>
          The app uses the Context API to manage and share the state across
          components, which allows efficient data flow for the weather
          information throughout the app.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">How to use</h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Enter a location in the search bar.</h3>
          </li>
          <li>
            <h3>
              2. The app will fetch the current weather, including the
              temperature, sunrise and sunset times, and a 5-day forecast.
            </h3>
          </li>
          <li>
            <h3>
              3. The 5-day forecast includes the high and low temperatures for
              each day.
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default WeatherApp;
