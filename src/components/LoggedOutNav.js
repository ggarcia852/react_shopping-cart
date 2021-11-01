import React from 'react';
import { Link } from 'react-router-dom';

export function LoggedOutNav(props){

    return (
        <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Create Account</Link>
                    </li>
        </React.Fragment>
    )
}