import React, { useState, useEffect } from 'react'
import ShoppingCart from '../components/ShoppingCart';


export default function MyCart(props){
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/api/my-cart')
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])

    return(
        <div>
        <h1 className="text-center pt-4">My Cart:</h1>
        <img src='https://cdn.icon-icons.com/icons2/2148/PNG/512/config_react_icon_132472.png'className='image-fluid mx-auto d-block pt-3' width='555' alt='react' />
        {cart.map((c, i) => <ShoppingCart key={i} item={c} />)}
        </div>
    )
}
