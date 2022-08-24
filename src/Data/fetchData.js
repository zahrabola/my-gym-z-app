export const exerciseOptions = {
  method: "GET",
 /// url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const axios = require("axios");

 export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/video/related",
 
  headers: {
    "X-RapidAPI-Key": "8213bd53bbmsheef81f1d6808d94p1a2e3djsnc7301be69b83",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const fetchData = async (url, options) => 
{
const response = await fetch(url, options);
  const data = await response.json();

  return data;
};