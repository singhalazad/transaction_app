import axios from 'axios';

const API_KEY = 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF';


axios.defaults.headers.common['x-hasura-access-key'] = `${API_KEY}`;


const axiosInstance = axios.create({
    baseURL: 'https://bursting-gelding-24.hasura.app/api/rest/',
    headers: {
      'Content-Type': 'application/json',
    },
  });



  export default axiosInstance ;