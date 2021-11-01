import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LoggedInNav } from './LoggedInNav';
import { LoggedOutNav } from './LoggedOutNav'


export default class NavBar extends Component {
    render() {
        return (
                 <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                          <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" width="50" height="45" alt="react" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            {this.props.loggedIn ? <LoggedInNav /> : <LoggedOutNav />}
                            </ul>
                            
                            { this.props.loggedIn ?  
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/' onClick={this.props.logOut}>Logout</Link>
                            </li>
                            </ul>: 
                                null}
                          
                            </div>
                        </div>
                    </nav>  
                </div>
        )
    }
}
