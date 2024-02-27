import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrentUser = (userid) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`users/${userid}`);
      setCurrentUser(response.data);
    })();
  }, [userid]);

  console.log(currentUser, "current");
  return currentUser;
};
