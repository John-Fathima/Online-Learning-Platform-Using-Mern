import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://studyapp-naan-mudhalvan-project.onrender.com', 
});

export default axiosInstance;
