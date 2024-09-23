// import axios from 'axios';
// // const BASE_URL = 'http://localhost:3000'

// export default axios.create({
//     baseURL:BASE_URL
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true
// });

// import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
//  // Use the environment variable

// export default axios.create({
//     baseURL: BASE_URL,
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
// });

import axios from 'axios';

const BASE_URL = process.env.VITE_APP_BASE_URL; // Use the environment variable
// const BASE_URL = "http://localhost:3000"
export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Connection": "keep-alive"
    },
    withCredentials: true,
});
