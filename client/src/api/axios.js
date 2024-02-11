import axios from 'axios';


// Create an instance with custom configuration
const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Authorization': 'Bearer token123'
  }
});




export default axiosInstance;
