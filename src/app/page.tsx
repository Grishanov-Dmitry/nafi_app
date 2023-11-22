"use client";

import { Header } from "./components/Header/Header";
import { useAppSelector } from "./redux/hooks";
import { getIsLoged } from "./redux/slices/selectors";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { ContactsPage } from "./components/ContactsPage/ContactsPage";

export default function Home() {
  const isLoged = useAppSelector(getIsLoged);

  // if (!isLoged) {
  //   return <LoginPage />;
  // }

  return (
    <div className="container">
      <Header />
      <main>
        <ContactsPage />
      </main>
    </div>
  );
}
