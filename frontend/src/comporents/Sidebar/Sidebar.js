import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { signOut } from '../../auth'

const Sidebar = () => {
  const history = useHistory();
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/dashboard">Dashboard

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/product">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/category">Category</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                style={{ cursor: 'pointer' }}
                onClick={() => signOut(() => {
                  history.push('/')
                })}
              >Sign Out</a></li>



          </ul>


        </div>
      </nav>
    </>
  )
}

export default Sidebar
