
import './Navbar.css'
import Button from './button'
import image from './nav.png'
function Navbar (){
    return(
    <>  
    <div id="navbar">
        <div id='logo'>
            <Button id='white' type='button' class='logo' name ="Logo"></Button>
        </div>
        <div id='mid'>
            <Button  id='white' type='button' class='mid' name ="Resume"></Button>
            <Button id='white' type='button' class='mid' name ="Templates"></Button>
            <Button id='white' type='button' class='mid' name ="About Us"></Button>
        </div >
        <div id='end'>
            <Button id='black' type='button' class='login' name ="Login"></Button>
        </div>
            
    </div>
    
    </>
       

    )
}

export default Navbar