import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Home extends Component {
    render() {
        return (
             <div className='container'>
                <div className='pt-5 text-center'>
                    <h1>Welcome to my React Shop!</h1>
                    <Link to='/products'>
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--SXWRB91l--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iq9r5pa6fmb2n5rfcvq4.jpg" className='img-fluid rounded-circle pt-2' to='/products' alt='react' />
                    </ Link>
                    <br />
                    <span className="small">
                    Created by: George Garcia, OCT 2021
                    </span>
                </div>
            </div>
        )
    }
}
