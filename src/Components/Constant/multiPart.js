import axios from "axios";

const axiosMultipartInstance = axios.create({

  baseURL: "http://hybrid.srishticampus.in/sports_event_pro_api/",

  // baseURL:  "http://localhost:4038/sports_event_pro_api",
// 
  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default axiosMultipartInstance;