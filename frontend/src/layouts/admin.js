import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../comporents/Sidebar/Sidebar'

const LayoutAdmin = (props) => {
    return (
        // <div className="row">
        //     <div className="col-4">
        //         <ul className="list-group">
        //             <li className="list-group-item">
        //                 <NavLink activeClassName="active" to="/admin/dashboard">Dashboard</NavLink>
        //             </li>
        //             <li className="list-group-item">
        //                 <NavLink activeClassName="active" to="/admin/product">Product</NavLink>
        //             </li>
        //             <li className="list-group-item">
        //                 <NavLink activeClassName="active" to="/admin/category">Category</NavLink>
        //             </li>
        //             <li className="list-group-item">
        //                 <NavLink activeClassName="active" to="/admin/user">User</NavLink>
        //             </li>
        //         </ul>

        //     </div>
        //     <div className="col-8">
        //         {props.children}
        //     </div>
        // </div>

<div>
  <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </header>
  <div className="container-fluid">
    <div className="row">
     <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        
        <h2>Section title</h2>
        <div className="table-responsive">
        {props.children}
        </div>
      </main>
    </div>
  </div>
</div>

    )
}

export default LayoutAdmin
