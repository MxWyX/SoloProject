import axios from "axios";

const CallAPI = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

const GetPoke = async (id) => {
  const res = await CallAPI(id);
  return res;
};

export default GetPoke;
