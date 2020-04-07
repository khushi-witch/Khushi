import React from "react"
//import Navbar from 'react-bootstrap/Navbar'
import Logo from "./logo.jfif";
import "./navbar.scss"



        class Navbar extends React.Component {
            constructor(){
                super()
                this.state={

                }
                this.handleClick=this.handleClick.bind(this)
            }
            handleClick(){
                console.log("karti mai")
            }
            render() {
                return (
                    <div>
                        <ul className="nav bg-light">
                            <li className="nav-item slam-left"><a href="#"><strong>HUMOURBABA</strong></a></li>
                            <li className="nav-item"><a href="#">Home</a></li>
                            <li className="nav-item"><a href="#">Men</a></li>
                            <li className="nav-item"><a className="contact" href="#">Women</a></li>
                            <li className="nav-item"><a href="#">Accessories</a></li>
                            <li className="nav-item"><a href="#" onClick={this.handleClick}>Login / Signup</a></li>
                        </ul>
                    </div>
                    
                );
            }
        }
        


export default Navbar