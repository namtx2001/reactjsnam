import React from 'react'
import { Link } from 'react-router-dom'

const AdminContactPage = (props) => {
    return (
<div>
            <table className="table table-striped table-sm">
            <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Action</th>
                        <th> <div>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    {props.contact.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.message}</td>
                            <td>
                                <Link className="btn btn-danger" onClick={() => props.DeleteContact(item._id)}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         
        </div>
    )}

export default AdminContactPage