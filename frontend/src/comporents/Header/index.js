import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { signOut, isAuthenticated } from '../../auth'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    const { user } = isAuthenticated();
    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
    }, [pathname, isLogged])
    return (
        <div>
            <header id="home" className="header">

                <nav className="nav">
                    <div className="navigation container">
                        {/* <div className="logo">
                            <h1>Codevo</h1>
                        </div> */}

                        <div className="menu">
                            <div className="top-nav">
                                <div className="logo">
                                    <h1>Codevo</h1>
                                </div>
                                <div className="close">
                                    <i className="bx bx-x"></i>
                                </div>
                            </div>

                            <ul className="nav-list">

                                <li className="nav-item">
                                    < NavLink exact className="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    < NavLink exact className="nav-link" activeClassName="active" aria-current="page" to="/product">Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    < NavLink exact className="nav-link" activeClassName="active" aria-current="page" to="/contact">Contact</NavLink>
                                </li>
                                

                               <li className="nav-item">
                                    < NavLink className="nav-link" activeClassName="active" to="/signin">Sign In</NavLink>
                                </li>
                                <li className="nav-item">
                                    < NavLink className="nav-link" activeClassName="active" to="/signup">Sign Up</NavLink>
                                </li>
                                {isLogged && (
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => signOut(() => {
                                                    setIsLogged(false);
                                                    history.push('/')
                                                })}
                                            >Sign Out</a></li>
                                    </>)}
                            </ul>


                        </div>

                        <a href="cart.html" className="cart-icon">
                            <i className="bx bx-shopping-bag"></i>
                        </a>

                        <div className="hamburger">
                            <i className="bx bx-menu"></i>
                        </div>
                    </div>
                </nav>


                <img src="./images/banner.png" alt="" className="hero-img" />

                <div className="hero-content">
                    <h2><span className="discount">70% </span> SALE OFF</h2>
                    <h1>
                        <span>Summer Vibes</span>
                        <span>mode on</span>
                    </h1>
                    <a className="btn" href="#">shop now</a>
                </div>
            </header>
        </div>
    )
}

export default Header
