import axios from "axios"

const axiosInstance = axios.create({

    //server api
    baseURL: 'http://hybrid.srishticampus.in:4038/sports_event_pro_api', 
    //  baseURL: 'http://localhost:4038/sports_event_pro_api', 
// 
    headers: {
      'Content-Type': 'application/json',
    },
    // baseURL: '', 
  
  //local api 
  
  
    // headers: {
    //   'Content-Type': 'application/json',
    // },

    //  url :"http://localhost:4038",
     url:  "http://hybrid.srishticampus.in:4038/"
    
  });
   
  export default axiosInstance