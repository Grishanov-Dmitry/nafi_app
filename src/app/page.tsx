"use client";

import { Header } from "./components/Header/Header";
import { useAppSelector } from "./redux/hooks";
import { getIsLogged } from "./redux/slices/selectors";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { ContactsPage } from "./components/ContactsPage/ContactsPage";

export default function Home() {
  const isLogged = useAppSelector(getIsLogged);

  if (!isLogged) {
    return <LoginPage />;
  }

  return (
    <div className="container">
      <Header />
      <main>
        <ContactsPage />
      </main>
    </div>
  );
}
