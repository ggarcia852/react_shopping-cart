import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            shoppingCart: [] 
        }
    }
    addItem = (product) => {
        let myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`)

        fetch(`https://kekambas-bs.herokuapp.com/api/add-to-cart/${this.props.product.id}`, {
            method: 'POST',
            headers: myHeaders,
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    shoppingCart: [(data)]
                })
            })
     }

    //  deleteItem = (product) => {
    //     let myHeaders = new Headers()
    //     myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`)

    //     fetch(`https://kekambas-bs.herokuapp.com/api/remove-from-cart/${product.id}`, {
    //         method: 'DELETE',
    //         headers: myHeaders,
    //     }).then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 shoppingCart: [{product}]
    //             })
    //         })
    //  }
     

    render() {
        return (
            <div className="card w-25 text-white bg-dark m-3 border-primary">
            <img src='https://static.frontendmasters.com/assets/courses/2020-02-14-pure-react-state/thumb.webp' className="card-img-top" alt="product" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.product.name}</h4>
                    <h5>${this.props.product.price}</h5>
                    <p className="card-text text-secondary">View Product for description</p>
                    <Link to={'/my-cart'} onClick={this.addItem} className="btn btn-sm btn-outline-success text-white">Add to Cart</Link>
                    {/* <button onClick={this.addItem} className="btn btn-sm btn-outline-success text-white">Add to Cart</button> */}
                    <br /> <br />
                    <Link to={`/products/${this.props.product.id}`} className="btn btn-sm btn-outline-info text-white">View Product</Link>
                </div>
            </div>
    
        
        )
    }
}



