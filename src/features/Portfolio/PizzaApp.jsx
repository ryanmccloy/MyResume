function PizzaApp() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>-This is a project piece as part of The Ultimate React Course-</p>
        <p>
          You can view this at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://pizza-app-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pizza App
          </a>
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <p>
          This project was built using Vite, React Router, and Redux. Customers
          can place an online order for Pizza 🍕.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Features 🚀</h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Edit Cart</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Customers can add, remove, or update pizza orders directly in
                the cart.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Track Order</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Real-time updates to keep track of your pizza order status.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Add Priority</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Customers can prioritize their orders for an additional fee,
                ensuring faster delivery.
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
            <h3>React Router:</h3>
            <p className="portfolio-smallerText">
              A collection of navigational components that compose declaratively
              with your application.
            </p>
          </li>
          <li>
            <h3>Redux:</h3>
            <p className="portfolio-smallerText">
              A predictable state container for managing the app's global state.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PizzaApp;
