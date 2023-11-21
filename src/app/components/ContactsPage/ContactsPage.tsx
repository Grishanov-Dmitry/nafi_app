import { AddContactBlock } from "../AddContactBlock/AddContactBlock";
import { ContactCard } from "../ContactCard/ContactCard";
import { ContactsTable } from "../ContactsTable/ContactsTable";
import { SearchMenu } from "../SearchMenu/SearchMenu";

export const ContactsPage = () => {
  const showContactCard = true;

  if (showContactCard) {
    return <ContactCard />;
  }

  return (
    <>
      <nav>
        <AddContactBlock />
        <SearchMenu />
      </nav>
      <ContactsTable />
    </>
  );
};
