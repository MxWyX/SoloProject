import React, { useState, useEffect } from "react";
import axios from "axios";

function GetPoke(id) {
  // Create an object with all the base data needed to fetch the pokemon data from the API

  const axiosClient = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log(id);
  console.log(url);
  // Using Axios
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    (id) => {
      if (id === null) return;
      (async function () {
        try {
          setLoading(true);
          const res = await axiosClient.get(`/pokemon/${id}`);
          setData(res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    },
    [id]
  );
  return { loading, data, error };
}

export default GetPoke;
