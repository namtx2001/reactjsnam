// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { useHistory, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import CategoryAPI from '../../../API/CategoryAPI'
// const EditCategoryPage = ({ onEditCate }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const history = useHistory();
//     const { id } = useParams();
//     // console.log(id);
//     const [category, setCategory] = useState({});
//     useEffect(() => {
//         const getCategory = async () => {
//             try {
//                 const { data } = await CategoryAPI.get(id)
//                 // console.log(data);
//                 setCategory(data);
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         getCategory();
//     }, []);
//     const onHandleSubmit = (data) => {
//         const newData = {
//             id: id,
//             ...data
//         }
//         const uploads = new FormData();
//         uploads.append("name", newData.name);
     
//         onEditCate(uploads);
//         history.push('/admin/category');
//         // console.log(data);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onHandleSubmit)}>
//                 <div className="form-floating mb-3">
//                     <input type="text"
//                         className="form-control"
//                         id="cate-name"
//                         placeholder="Tên Cate"
//                         defaultValue={category.name}
//                         {...register('name', { required: true })}
//                     />
//                     <label htmlFor="cate-name">Tên</label>
//                     {errors.name && <span className="text-danger mt-2">Field</span>}
//                 </div>
//                 <button type="submit" className="btn btn-primary">EDIT</button>
//             </form>
//         </div>
//     )
// }

// export default EditCategoryPage
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import CategoryAPI from '../../../API/CategoryAPI';
const EditCategory = ({ onCateEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    const [category, setCategory] = useState({});
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategory();
    }, []);
    const onHandleSubmit = (data) => {
        const newData = {
            id: id,
            ...data
        }
        const uploads = new FormData();
        uploads.append("name", newData.name);    
        onCateEdit(id, uploads);
        history.push('/admin/category');
    }
    return (
        <>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><strong>Tên danh mục</strong></label>
                    <input type="Text" className="form-control" id="name" defaultValue={category.name} {...register('name', { required: true })} />
                    {errors.name && <span className="text-danger mt-2">Bạn cần nhập tên danh mục</span>}
                </div >

                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </>
    )
}

export default EditCategory