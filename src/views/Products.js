import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';


export default function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       fetch('https://kekambas-bs.herokuapp.com/api/products')
       .then(res => res.json())
       .then(data => setProducts(data))
    }, [])

    return(
       <div>
         <div className='pt-5 pb-3 text-center'>
            <h1>Products:</h1>
         </div>
         <div className='col-12 '>
            <div className='row justify-content-center'>
               {products.map((p, i) => <ProductCard key={i} product={p} />)}
            </div>
         </div>
       </div> 
    )
}

