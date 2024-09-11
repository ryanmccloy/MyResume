function ShoppingList() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>
          You can view this at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href="https://shopping-list-mocha.vercel.app/"
            target="_blank"
          >
            Shopping List
          </a>
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <p>
          Simple personal project using Create React App and useState. (This
          project is non-responsive, and was just to get practice with using
          state for the first time)
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Overview</h2>
        <p>
          The Shopping List App is a convenient tool designed to manage your
          shopping experience efficiently. It allows you to keep track of items
          you plan to purchase, tallying up the total cost as you shop. Once
          you've bought an item, you can easily move it to the "Bought" section,
          where the app will calculate the total of your purchased goods,
          helping you to stay within budget.
        </p>
      </div>

      <div className="portfolio-sectionStyling pb-[10px]">
        <h2 className="portfolio-headerStyling">Features</h2>

        <ol className="flex flex-col gap-[15px]">
          <li>
            <h3>1. Add Items</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Easily add items to your shopping list along with their price.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Calculate Total</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Automatically calculate the total price of items on your
                shopping list and the items you have already bought.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Manage Items</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Move items from your shopping list to the bought list as you
                purchase them.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. View Balance</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Keep an eye on how much you have spent against the total balance
                of your current list.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ShoppingList;
