import React from "react";
import { Link } from 'react-router-dom'


export default function ShoppingCart(props) {
    

    return(
        <div>
             <div className="card w-25 text-white bg-dark m-3 border-primary">
            <img src='https://static.frontendmasters.com/assets/courses/2020-02-14-pure-react-state/thumb.webp' className="card-img-top" alt="product" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.item.name}</h4>
                    <h5>${this.props.item.price}</h5>
                    <p className="card-text text-secondary">{this.props.item.description}</p>
                    <Link to={'/my-cart'} onClick={this.deleteItem} className="btn btn-sm btn-outline-danger text-white">Remove Item</Link>
                    {/* <br /> <br /> */}
                    {/* <Link to={`/products/${this.props.product.id}`} className="btn btn-sm btn-outline-info text-white">View Product</Link> */} 
                </div>
            </div>
        </div>
    )
}