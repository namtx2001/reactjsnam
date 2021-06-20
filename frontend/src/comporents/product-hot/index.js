import React from 'react'
import { Link } from 'react-router-dom'
const ProductHot = (props) => {
    console.log(props)
    return (
        <div>
            <section className="section featured">
                <div className="title">
                    <h1>Products Hot</h1>
                </div>
                <div className="product-center container">
                    {props.products.filter(item => item.hot == true).map((item, index) => {
                        return <div className="product" key={index}>
                            <div className="product-header">
                                <img src={`http://localhost:4000/api/product/photo/${item._id}`} alt=""></img>
                                <ul className="icons">
                                    <span><i className="bx bx-heart" /></span>
                                    <span><i className="bx bx-shopping-bag" /></span>
                                    <span><i className="bx bx-search" /></span>
                                </ul>
                            </div>
                            <div className="product-footer">
                            <Link to={`/product/${item._id}`}>{item.name}</Link>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <h4 className="price">{item.price}</h4>
                            </div>

                        </div>
                    })}
                </div>

            </section>

        </div>

    )
}


export default ProductHot
