import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Authorization': 'Bearer token123'
  }
});




export default axiosInstance;
