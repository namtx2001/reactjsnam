import React from 'react';
import Products from '../comporents/Products'
import Footer from '../comporents/Footer'
import ProductHot from '../comporents/product-hot';




const HomePage = (props) => {
    return (
       
    <div>
          <ProductHot {...props}/>
          
       <Products  {...props}/>
       <Footer />
    </div>
       
    )
}

export default HomePage
