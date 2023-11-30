import axios from "axios";

const config = axios.create({
     baseURL: 'http://localhost:5000'
     // baseURL: 'https://learn-room-pro-server.vercel.app'
})

const useAxiosSecure = () => {
     return config;
};

export default useAxiosSecure;