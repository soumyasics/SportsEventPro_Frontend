import axios from "axios";

const axiosMultipartInstance = axios.create({

  // baseURL: "http://hybrid.srishticampus.in/sports_event_pro_api/",
<<<<<<< HEAD

  baseURL:  "http://localhost:4038/sports_event_pro_api",
=======
>>>>>>> e9745abc60541ac64180c14234a0c2f7234360ba

  baseURL:  "http://localhost:4038/sports_event_pro_api",
// 
  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default axiosMultipartInstance;