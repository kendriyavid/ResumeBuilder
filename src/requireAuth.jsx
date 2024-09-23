// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "./hooks/useAuth";
// import Cookies from 'js-cookie';


// const RequireAuth=()=>{
//     const {auth} = useAuth();
//     const location = useLocation();
//     const name = Cookies.get('jwt');
//     console.log("cookies",name)

//     return(
//         name?
//             <Outlet></Outlet>
//             :<Navigate to='/login' state={{from:location}} replace></Navigate>
//     )
// }

// export default RequireAuth

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const RequireAuth = () => {
    const { isLoggedIn } = useAuth(); // Access isLoggedIn from AuthContext
    const location = useLocation();

    return (
        isLoggedIn ? (
            <Outlet />
        ) : (
            <Navigate to='/login' state={{ from: location }} replace />
        )
    );
}

export default RequireAuth;
