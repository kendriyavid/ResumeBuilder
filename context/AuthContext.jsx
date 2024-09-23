// import { createContext, useState } from "react";

// const AuthContext = createContext({})

// export const AuthProvider =({children}) =>{
//     const [Auth,setAuth] = useState({accessToken:null});
//     return(
//         <AuthContext.Provider value={{Auth,setAuth}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext;

// AuthContext.js
// import { createContext, useState, useEffect } from 'react';
// import axios from './../src/api/axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);  // Authentication state

//     // Check if the user is logged in when the component mounts
//     useEffect(() => {
//         axios.get('http://localhost:3000/auth/check', { withCredentials: true })
//             .then(response => {
//                 if (response.status === 200) {
//                     setIsLoggedIn(true);
//                 }
//             })
//             .catch(() => {
//                 setIsLoggedIn(false);
//             });
//     }, []);

//     // Logout function
//     const handleLogout = () => {
//         axios.get('http://localhost:3000/logout', { withCredentials: true })
//             .then(() => {
//                 setIsLoggedIn(false);
//             })
//             .catch(error => {
//                 console.error('Logout error:', error);
//             });
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;


// import { createContext, useState, useEffect } from 'react';
// import axios from './../src/api/axios';
// const CHECK_URL = "/check"
// const LOGOUT_URL = "/logout"
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState(null);  // Store authentication data

//     // Check if the user is logged in when the component mounts
//     useEffect(() => {
//         console.log(auth)
//         axios.get(CHECK_URL, { withCredentials: true })
//             .then(response => {
//                 if (response.status === 200) {
//                     setAuth(response.data); // Set auth data from response
//                 }
//             })
//             .catch(() => {
//                 setAuth(null)
//             });
//     }, []);

//     // Logout function
//     const handleLogout = () => {
//         axios.get(LOGOUT_URL, { withCredentials: true })
//             .then(() => {
//                 setAuth(null); // Clear authentication data on logout
//                 localStorage.removeItem('accessToken'); // Optionally clear localStorage if you store tokens there
//             })
//             .catch(error => {
//                 console.error('Logout error:', error);
//             });
//     };

//     return (
//         <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;


// import React, { createContext, useState, useEffect } from 'react';
// import axios from './../src/api/axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState(null);  // Store authentication data

//     // Check if the user is logged in when the component mounts
//     useEffect(() => {
//         const token = localStorage.getItem('accessToken');
//         if (token) {
//             setAuth({ accessToken: token }); // Restore auth state from local storage
//         }
//     }, []);

//     // Log auth state when it changes
//     useEffect(() => {
//         console.log(auth ? "User is present" : "User is not present");
//     }, [auth]);

//     // Logout function
//     const handleLogout = async () => {
//         try {
//             await axios.get('/logout', { withCredentials: true });
//             setAuth(null); // Clear authentication data on logout
//             localStorage.removeItem('accessToken'); // Clear local storage
//         } catch (error) {
//             console.error('Logout error:', error);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;


import React, { createContext, useState, useEffect } from 'react';
import axios from './../src/api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);  // Store authentication data
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage logged-in status

    // Check if the user is logged in when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setAuth({ accessToken: token }); // Restore auth state from local storage
            setIsLoggedIn(true); // Set logged-in status
        }
    }, []);

    // Log auth state when it changes
    useEffect(() => {
        console.log(auth ? "User is present" : "User is not present");
        setIsLoggedIn(!!auth); // Update logged-in status based on auth state
    }, [auth]);

    // Logout function
    const handleLogout = async () => {
        try {
            await axios.get('/logout', { withCredentials: true });
            setAuth(null); // Clear authentication data on logout
            setIsLoggedIn(false); // Update logged-in status
            localStorage.removeItem('accessToken'); // Clear local storage
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, isLoggedIn, setAuth, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
