import axios from "axios";

// create an instance  for the url 
const fetcher = axios.create({
    baseURL: 'http://localhost:5000',
});

export default fetcher;