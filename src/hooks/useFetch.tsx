import React, { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const getData = async () => {
    const response = await fetch(url).then((res) => res.json());
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useFetch;
