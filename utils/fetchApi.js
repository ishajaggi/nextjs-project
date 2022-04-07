import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}${url}`, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "a5161529b8msh934bd808afefdc5p1ed34djsn3892f2140011",
    },
  });
  return data;
};
