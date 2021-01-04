import { useState, useEffect } from "react";

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setIsLoading(true);
    console.log("fetching url..." + url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
        console.log("data is " + data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log("an error occured " + error);
      });
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default UseFetch;
