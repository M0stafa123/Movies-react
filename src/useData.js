import { useState, useEffect } from "react";

const useData = (url) => {
  const [Movies, setMoveis] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMoveis(data);
      });
  }, [url]);
  return { Movies, setMoveis };
};
export default useData;
