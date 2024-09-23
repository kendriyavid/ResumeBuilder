// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext";

// const useAuth = () => {
//     return useContext(AuthContext);
// }

// export default useAuth;


import { useContext } from 'react';
import AuthContext from '../../context/AuthContext'; // Adjust path as needed

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;