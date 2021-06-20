import React from 'react'
import { Link } from 'react-router-dom'
const AdminCategoryPage = (props) => {
    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>

                        <th>Action</th>
                        <th> <div>
                            <Link to="/admin/category/add" className="btn btn-primary">Add</Link>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    {props.cate.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>



                            <td>
                                <Link to={`/admin/category/${item._id}`} className="btn btn-primary">Edit</Link>
                                <a href="" onClick={() => props.DeleteCate(item._id)}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCategoryPage
