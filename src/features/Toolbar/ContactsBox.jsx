import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchDocument } from "../../utils/fetchers";
import Contact from "./Contact";

function ContactsBox() {
  const [activeContact, setActiveContact] = useState(null);

  const {
    data: contacts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => fetchDocument("resume", "contacts"),
  });

  const contactsArr = contacts ? Object.entries(contacts) : [];

  return (
    <div className="W95Border absolute bottom-14 bg-primary-lightGray pr-[2px] pb-[2px]  flex flex-col w-[150px]">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading contacts.</p>}

      {contactsArr.map((contact) => (
        <Contact
          contactType={contact[0]}
          contactString={contact[1]}
          key={contact[0]}
          activeContact={activeContact}
          setActiveContact={setActiveContact}
        />
      ))}
    </div>
  );
}

export default ContactsBox;
