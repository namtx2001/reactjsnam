import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const AdminProductAddPage = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
      
            const uploads = new FormData();
            uploads.append("name", data.name);
            uploads.append("price", data.price);
            uploads.append("photo", data.photo[0]);
            uploads.append("category", data.category);

            uploads.append("description", data.description);
            uploads.append("shipping", data.shipping);
            uploads.append("hot", data.hot);
            props.onAdd(uploads);
            
            history.push('/admin/product');
        }
    
    return (
        <div>
            <h1>Product Add</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá sản phẩm"
                        {...register('price', { required: true })}
                    />
                    <div className="">
                    <label htmlFor="product-photo">Image</label>
                    <input type="file"
                        className="form-control"
                        id="product-photo"
                        placeholder="Photo"
                        {...register('photo', { required: true })}
                    />
                    {errors.photo && <span className="text-danger mt-2">Field</span>}
                </div>
                    <label htmlFor="product-price">Giá sản phẩm</label>
                    {errors.price && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-desc">Mô tả sản phẩm</label>
                    <textarea type="number"
                        className="form-control"
                        id="product-desc"
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="mb-3">
                <label className="text-light" htmlFor="product-category">Danh mục</label>
                    <select 
                        className="mb-3 ml-3 "
                        aria-label="Default select example"
                        id="product-category"
                        placeholder="Danh Mục"
                        {...register('category', { required: true })}>
                            {
                                props.cate.map((category , index) =>{
                                    return(
                                        <option value={category._id} key={index}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
               
                    
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="mb-3">
                    <input type="checkbox" {...register('shipping')} /> Shipping
                </div>
                <div className="mb-3">
                    <input type="checkbox" {...register('hot')} />Hot
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
export default AdminProductAddPage
