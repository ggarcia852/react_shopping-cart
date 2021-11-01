import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function ProductDetails(props){
    const [product, setProduct] = useState({});
    const productId = props.match.params.id;

    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/api/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, )
    return(
        <div className="col">
            <h1 className='text-center pt-5'>{product.name}:</h1>
            <div className='text-center' style={{textDecorationLine: 'underline'}} >
                <Link to={'/products'}>Back to All Products</Link>
            </div>
           <div className='row'style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
            <div className="card text-white bg-dark m-4 border-primary" style={{ width: '22rem'}}>
            <img src='https://static.frontendmasters.com/assets/courses/2020-02-14-pure-react-state/thumb.webp' className="card-img-top" alt="product" />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <h5>${product.price}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={'/my-cart'}  className="btn btn-sm btn-outline-success text-white">Add to Cart</Link>
                </div>
            </div>
            </div>   
        </div>        
    )
}


// onClick={this.addItem}