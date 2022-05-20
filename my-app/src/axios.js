import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:5001/agroferdure-8e778/us-central1/api'
});

export default instance;