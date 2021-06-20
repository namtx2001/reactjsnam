import React from 'react'
import Layout from '../core/layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    const { user } = isAuthenticated();
    console.log(user)
    return (
        <div>
           
                <div className="row">
                    <div className="col-4">
                    <div className="card">
                    <div className="card-header">Create</div>
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/create/product">Sản phẩm</Link></li>
                        <li className="list-group-item"><Link to="/create/category">Danh mục sản phẩm</Link></li>

                    </ul>
                    </div>
                    </div>
                    <div className="col-8">
                    <div className="card">
                        <div className="card-header">Thông tin user</div>
                        <ul className="list-group"> 
                            <li className="list-group-item">Name: {user.name}</li>
                            <li className="list-group-item">Email: {user.email}</li>
                            <li className="list-group-item">{user.role == 1 ? 'Admin' : 'Register user'}</li>
                        </ul>
                    </div>
                    </div>
                </div>
           
        </div>
    )
}

export default AdminDashboard
