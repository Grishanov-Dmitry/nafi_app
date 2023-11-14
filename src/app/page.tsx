"use client";

import { Header } from "./components/Header/Header";
import { SearchMenu } from "./components/SearchMenu/SearchMenu";
import { AddContactBlock } from "./components/AddContactBlock/AddContactBlock";
import { ContactsTable } from "./components/ContactsTable/ContactsTable";
import { useAppSelector } from "./redux/hooks";
import { getIsLoged } from "./redux/slices/selectors";
import { LoginPage } from "./components/LoginPage/LoginPage";

export default function Home() {
  const isLoged = useAppSelector(getIsLoged);

  if (!isLoged) {
    return <LoginPage />;
  }

  return (
    <div className="container">
      <Header />
      <main>
        <nav>
          <AddContactBlock />
          <SearchMenu />
        </nav>
        <ContactsTable />
      </main>
    </div>
  );
}
