import { useEffect, useState } from "react";
import { UserDetails } from "./user-details";
import { UserRepositories } from "./user-repositories";
import { getUserProfile } from "./api";

import type { UserProfile } from "./user-profile";

function App() {
  const [userProfile, setUserProfile] = useState<UserProfile>();

  useEffect(() => {
    getUserProfile("andre-sch")
      .then(setUserProfile);
  }, []);

  return (
    <>
      <header></header>
      <main>
        {userProfile && <UserDetails {...userProfile} />}
        {userProfile && <UserRepositories {...userProfile} />}
      </main>
    </>
  );
}

export { App };
