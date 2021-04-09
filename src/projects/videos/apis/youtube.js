import axios from "axios";

const KEY = "AIzaSyD7vOboxd9TPJtFqOWoIalO0ioq58d1jm4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
