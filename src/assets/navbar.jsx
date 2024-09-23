
// import axios from '../api/axios'
// import './Navbar.css'
// import Button from './button'
// import image from './nav.png'
// import Cookies from 'js-cookie'
// import { useNavigate } from 'react-router-dom'
// function Navbar (){
//     const name = Cookies.get('jwt')
//     console.log(name)
//     const navigate = useNavigate(); // Get the navigate function from React Router

    
//     const handleLogout = () => {
//         console.log("here")
//         console.log(name)
//         axios.get('http://localhost:3000/logout', { withCredentials: true })
//             .then(() => {
//                 Cookies.remove('jwt'); // Delete the JWT cookie
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.error('Logout error:', error);
//             });

//     };

//     return(
//     <>  
//     <div id="navbar">
//         <div id='logo'>
//             <Button id='white' type='button' class='logo' name ="Zeity" to='/'></Button>
//         </div>
//         <div id='mid'>
//             <Button  id='white' type='button' class='mid' name ="Resume" to='/resume'></Button>
//             {/* <Button id='white' type='button' class='mid' name ="Templates"></Button> */}
//             <Button id='white' type='button' class='mid' name ="About Us"></Button>
//         </div >
//         <div id='end'>
//             {name ? (
//                         <Button id='black' type='button' class='login' name="Logout" onclick={handleLogout}></Button>
//                     ) : (
//                         <Button id='black' type='button' class='login' name="Login" to='/login'></Button>
//                     )}
//         </div>
            
//     </div>
    
//     </>
       

//     )
// }

// export default Navbar



import axios from '../api/axios'
import './Navbar.css';
import image from './nav.png'
import Button from './button';
import { useContext } from 'react';
import AuthContext from './../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { isLoggedIn, handleLogout } = useContext(AuthContext);  // Access state from AuthContext
    const navigate = useNavigate();  // Get the navigate function from React Router
    console.log(isLoggedIn)
    return (
        <>
            <div id="navbar">
                <div id='logo'>
                    <Button id='white' type='button' class='logo' name="Zeity" to='/' />
                </div>
                <div id='mid'>
                    <Button id='white' type='button' class='mid' name="Resume" to='/resume' />
                    <Button id='white' type='button' class='mid' name="About Us" />
                </div>
                <div id='end'>
                    {isLoggedIn ? (
                        <Button id='black' type='button' class='login' name="Logout" onclick={handleLogout} />
                    ) : (
                        <Button id='black' type='button' class='login' name="Login" to='/login' />
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;
