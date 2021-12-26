import React from 'react'
import Header from "../Header/Header"
import {useSelector} from "react-redux";
import Product from '../Product/Product';
const Home = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    const showProduct = products.slice(0,8);
    return (
        <div>
        <Header />
            <div className="container">
                <div className="row">
                    {showProduct.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)}
                </div>
            </div>
        </div>
    )
}

export default Home
