import axios from "axios";
import { useEffect, useState } from "react";

export const useResourceUser = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  console.log(resource, "current");
  return resource;
};
