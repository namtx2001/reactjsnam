import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import ProductAPI from '../API/ProductAPI';
const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProduct(data);
                console.log(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])


    return (
        <div>
  <section className="section product-detail">
  <div className="details container-md">
    <div className="left">
      <div className="main">
      <img  src={`http://localhost:4000/api/product/photo/${product._id}`} alt="" ></img>
      </div>
    </div>
    <div className="right">
      <span>Home/T-shirt</span>
      <h1>{product.name}
    
      </h1>
      <div className="price">{product.price}</div>
     
      <form className="form">
        <input type="text" placeholder={1} />
        <a href="cart.html" className="addCart">Add To Cart</a>
      </form>
      <h3>Product Detail</h3>
      <p>
       {product.description}</p>
    </div>
  </div>
</section>


        </div>
    )
}

export default ProductDetailPage
