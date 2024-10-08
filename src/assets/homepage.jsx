
import Button from "./button"
import Navbar from "./navbar"
import './homepage.css'
import Footer from "./footer/footer"
import Card from "./footer/Card"
import { Link } from "react-router-dom"
function Homepage() {
    return(
        <>
        <Navbar></Navbar>
        <div id="hero">
            <div id="one">
                <div id="insideone">
                    <h1>Zeity</h1>
                    <p id="hero">Designs That Inspire, Portfolios That Transcend</p>
                    <Button id='black' type='button' name = 'Get Started' to='/resumebuilder'></Button>
                </div>
            </div>
        </div>
        <div id="CC">
        </div>
        <Footer></Footer>
        </>
    )
}

export default Homepage