// const sectionStyling = "flex flex-col gap-[25px] tracking-wider";
// const headerStyling = "text-main-lg border-b-2 pb-[10px]";
// const hoverStyling =
//   "hover:text-primary-blue hover:cursor-pointer transition-colors duration-200";
// const smallerText = "text-main-sm";
// const liStyling = "pl-[25px]";

// function ParadisePaddles() {
//   return (
//     <div className="flex flex-col gap-[30px]">
//       <div className={sectionStyling}>
//         <p>
//           You can view this at:{" "}
//           <a
//             className={`${hoverStyling} text-decoration-line: underline underline-offset-4`}
//             href=" https://paradise-paddles-fe9fumxx2-ryan-mccloys-projects.vercel.app/"
//             target="_blank"
//           >
//             Paradise Paddles
//           </a>
//         </p>

//         <p>
//           Paradise Paddles is a web application that offers water activity
//           rentals, including paddle boards and kayaks. Users can browse the
//           website, see prices and FAQs, and reserve a rental. This project is
//           built using Vite and React, styled with Tailwind CSS, with Supabase
//           for storage and managing the remote state. This webpage is currently
//           only styled for desktop and iPad.
//         </p>
//       </div>

//       <div className={sectionStyling}>
//         <h2 className={headerStyling}>Table of Contents</h2>
//         <ul className="flex flex-col gap-[10px]">
//           <li className={`${hoverStyling}`}>
//             <a href="#overview">Overview</a>
//           </li>
//           <li className={`${hoverStyling}`}>
//             <a href="#features">Features</a>
//           </li>
//           <li className={`${hoverStyling}`}>
//             <a href="#technologies">Technologies</a>
//           </li>
//           <li className={`${hoverStyling}`}>
//             <a href="#installation">Installation</a>
//           </li>
//         </ul>
//       </div>

//       <div id="overview" className={sectionStyling}>
//         <h2 className={headerStyling}>Overview</h2>
//         <p>
//           Paradise Paddles aims to provide a seamless and engaging experience
//           for users looking to rent water sports equipment. The website includes
//           detailed rental listings, real-time availability, user accounts, and
//           more.
//         </p>
//       </div>

//       <div id="features" className={sectionStyling}>
//         <h2 className={headerStyling}>Features</h2>

//         <ol className="flex flex-col gap-[15px]">
//           <li>
//             <h3>1. Home Page</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Attractive hero section with high quality images.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>2. Rental Listings</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Display paddle boards and kayaks with descriptions and pricing.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>3. Booking System</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Reservation form for selecting dates and times, and making
//                 reservations.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>4. Pricing Information</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Display pricing for hourly, half day, and daily rentals.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>5. User Accounts</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Registration and login.
//               </li>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Profile management for updating personal information, viewing
//                 reservations, and tracking current bookings.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>6. Contact and Support</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>Contacts</li>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Frequently Asked Questions (FAQs) section.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>7. About Us Section</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Information about the business, mission, and team.
//               </li>
//             </ul>
//           </li>

//           <li>
//             <h3>8. Additional Features</h3>
//             <ul>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Mobile responsiveness. (Work In Progress)
//               </li>
//               <li className={`${liStyling} ${smallerText}`}>
//                 SEO optimization. (Work In Progress)
//               </li>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Social media integration.
//               </li>
//               <li className={`${liStyling} ${smallerText}`}>
//                 Weather widget. (Work In Progress)
//               </li>
//             </ul>
//           </li>
//         </ol>
//       </div>

//       <div id="technologies" className={sectionStyling}>
//         <h2 className={headerStyling}>Technologies</h2>

//         <ul className="flex flex-col gap-[15px]">
//           <li>
//             <h3>Vite:</h3>
//             <p className={smallerText}>
//               Fast build tool and development server
//             </p>
//           </li>
//           <li>
//             <h3>React:</h3>
//             <p className={smallerText}>
//               JavaScript library for building user interfaces
//             </p>
//           </li>
//           <li>
//             <h3>Tailwind CSS:</h3>
//             <p className={smallerText}>
//               Tailwind CSS: Utility-first CSS framework for styling
//             </p>
//           </li>
//           <li>
//             <h3>Supabase:</h3>
//             <p className={smallerText}>Backend services and storage</p>
//           </li>
//         </ul>
//       </div>

//       <div id="installation" className={`${sectionStyling} pb-[10px]`}>
//         <h2 className={headerStyling}>Installation</h2>

//         <p>
//           You can view the installation instructions at:{" "}
//           <a
//             className={`${hoverStyling} text-decoration-line: underline underline-offset-4`}
//             href=" https://github.com/ryanmccloy/paradise-paddles?tab=readme-ov-file"
//             target="_blank"
//           >
//             Github README
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ParadisePaddles;

function ParadisePaddles() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-sectionStyling">
        <p>
          You can view this at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href=" https://paradise-paddles-fe9fumxx2-ryan-mccloys-projects.vercel.app/"
            target="_blank"
          >
            Paradise Paddles
          </a>
        </p>

        <p>
          Paradise Paddles is a web application that offers water activity
          rentals, including paddle boards and kayaks. Users can browse the
          website, see prices and FAQs, and reserve a rental. This project is
          built using Vite and React, styled with Tailwind CSS, with Supabase
          for storage and managing the remote state. This webpage is currently
          only styled for desktop and iPad.
        </p>
      </div>

      <div className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Table of Contents</h2>
        <ul className="portfolio-ulStyling">
          <li className="portfolio-hoverStyling">
            <a href="#overview">Overview</a>
          </li>
          <li className="portfolio-hoverStyling">
            <a href="#features">Features</a>
          </li>
          <li className="portfolio-hoverStyling">
            <a href="#technologies">Technologies</a>
          </li>
          <li className="portfolio-hoverStyling">
            <a href="#installation">Installation</a>
          </li>
        </ul>
      </div>

      <div id="overview" className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Overview</h2>
        <p>
          Paradise Paddles aims to provide a seamless and engaging experience
          for users looking to rent water sports equipment. The website includes
          detailed rental listings, real-time availability, user accounts, and
          more.
        </p>
      </div>

      <div id="features" className="portfolio-sectionStyling">
        <h2 className="portfolio-headerStyling">Features</h2>

        <ol className="portfolio-olStyling">
          <li>
            <h3>1. Home Page</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Attractive hero section with high quality images.
              </li>
            </ul>
          </li>

          <li>
            <h3>2. Rental Listings</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Display paddle boards and kayaks with descriptions and pricing.
              </li>
            </ul>
          </li>

          <li>
            <h3>3. Booking System</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Reservation form for selecting dates and times, and making
                reservations.
              </li>
            </ul>
          </li>

          <li>
            <h3>4. Pricing Information</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Display pricing for hourly, half day, and daily rentals.
              </li>
            </ul>
          </li>

          <li>
            <h3>5. User Accounts</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Registration and login.
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                Profile management for updating personal information, viewing
                reservations, and tracking current bookings.
              </li>
            </ul>
          </li>

          <li>
            <h3>6. Contact and Support</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Contacts
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                Frequently Asked Questions (FAQs) section.
              </li>
            </ul>
          </li>

          <li>
            <h3>7. About Us Section</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Information about the business, mission, and team.
              </li>
            </ul>
          </li>

          <li>
            <h3>8. Additional Features</h3>
            <ul>
              <li className="portfolio-liStyling portfolio-smallerText">
                Mobile responsiveness. (Work In Progress)
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                SEO optimization. (Work In Progress)
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                Social media integration.
              </li>
              <li className="portfolio-liStyling portfolio-smallerText">
                Weather widget. (Work In Progress)
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
              JavaScript library for building user interfaces
            </p>
          </li>
          <li>
            <h3>Tailwind CSS:</h3>
            <p className="portfolio-smallerText">
              Tailwind CSS: Utility-first CSS framework for styling
            </p>
          </li>
          <li>
            <h3>Supabase:</h3>
            <p className="portfolio-smallerText">
              Backend services and storage
            </p>
          </li>
        </ul>
      </div>

      <div id="installation" className="portfolio-sectionStyling pb-[10px]">
        <h2 className="portfolio-headerStyling">Installation</h2>

        <p>
          You can view the installation instructions at:{" "}
          <a
            className="portfolio-hoverStyling portfolio-underline"
            href=" https://github.com/ryanmccloy/paradise-paddles?tab=readme-ov-file"
            target="_blank"
          >
            Github README
          </a>
        </p>
      </div>
    </div>
  );
}

export default ParadisePaddles;
