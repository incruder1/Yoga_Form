import React from 'react'
import Header from '../component/header'
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../context/auth.js";
// img/hero.png
import hero from "../img/hero.png"
import About from '../component/about';
import "./style.css";
function HomePage() {
    const [auth, setAuth] = useAuth();
    
  return (
    <>
    <Header />
        <div className="hero">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-text">
                            <h1>Yoga Practice For Good Health</h1>
                            <p>
                            Yoga is an ancient practice that originated in India and has evolved over thousands of years. The word "yoga" is derived from the Sanskrit word "yuj," which means to unite or join. 
                            </p>
                            <div className="hero-btn">
                            {auth?.user ?   <>
                                <a className="btn" href="/update">Update Form</a>
                                </>:<>
                                <a className="btn" href="/signUp">Join Now</a>
                                <a className="btn" href="/Login">Login</a>
                                </>
                            
                        }
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-image">
                            <img src={hero} alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About />
    </>
  )
}

export default HomePage