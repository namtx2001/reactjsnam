import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            < NavLink exact className="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink className="nav-link" activeClassName="active"  to="/signin">Sign In</NavLink>
                        </li>              
                        <li className="nav-item">
                            < NavLink className="nav-link" activeClassName="active"  to="/signup">Sign Up</NavLink>
                        </li>     
                        <li className="nav-item">
                            < a className="nav-link" activeClassName="active" style={{cursor:'pointer'}} >Sign Out</a>
                        </li> 
                    </ul>
        </>
    )
}

export default Nav
