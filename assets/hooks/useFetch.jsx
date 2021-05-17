import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Enable to fetch the data ... Try again later");
        }
        return res.json();
      })
      .then((data) => {
        var boom = data["hydra:member"];
        setData(boom);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => {
      abort.abort();
    };
  }, [url]);
};

export default useFetch;
