import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import ProductAPI from '../../../API/ProductAPI';
const EditProductPage = ({ onEditProduct }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    const [category, setCategory] = useState({});
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await ProductAPI.get(id);
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
        uploads.append("price", newData.price);
        uploads.append("photo", newData.photo[0]);
        uploads.append("description", newData.description);
        uploads.append("shipping", newData.shipping);
        onEditProduct(id, uploads);
        history.push('/admin/product');
    }
    return (
        <>
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
                    <input type="checkbox" {...register('shipping')} /> Shipping
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default EditProductPage