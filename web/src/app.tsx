import { useEffect, useState } from "react";
import { Header } from "./header";
import { UserDetails } from "./user-details";
import { UserRepositories } from "./user-repositories";
import { Footer } from "./footer";

import { getUserProfile } from "./api";
import type { UserProfile } from "./user-profile";

import "./styles/main.css"

function App() {
  const [userProfile, setUserProfile] = useState<UserProfile>();

  useEffect(() => {
    getUserProfile("andre-sch")
      .then(setUserProfile);
  }, []);

  return (
    <>
      <Header />
      <main>
        {userProfile && <UserDetails {...userProfile} />}
        {userProfile && <UserRepositories {...userProfile} />}
      </main>
      <Footer />
    </>
  );
}

export { App };
