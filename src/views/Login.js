import React from 'react';
import { Redirect } from 'react-router-dom';


export const Login = (props) => {
    
    return(
        props.loggedIn ? <Redirect to='/products' /> :
        <div>
        <h2 className='text-center pt-5 pb-3'>Log In to Begin Shopping:</h2>
        <form onSubmit={props.handleSubmit} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className='form-group'>
                <fieldset>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' className='form-control' name='username' placeholder='Username' />
                </fieldset>
               
                <fieldset>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' className='form-control' name='password' placeholder='Password' />
                </fieldset>
                <br />
                <input type='submit' className='btn btn-sm btn-dark' value='Log In' />
            </div>
         </form>
        <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/The-Best-React-Design-Patterns-You-Should-Know-About-1-1024x512.png.webp" className='image-fluid rounded-circle mx-auto d-block pt-3' width='555' alt='react' />
        </div>
    )
}










// handleSubmit = (e) => {
//     e.preventDefault();
//     let username = e.target.username.value;
//     let password = e.target.passsword.value;
//     let encodedString = btoa(`${username}:${password}`)

//     let myHeaders = new Headers();
//     myHeaders.append('Authorization', `Basic ${encodedString}` )
    
//     fetch('https://kekambas-bs.herokuapp.com/api/token', {
//         method:'POST',
//         headers: myHeaders,
//         redirect: '/products',
//     }).then(res => res.json())
//         .then(data => localStorage.setItem('token', data['token']))
//         .catch(err => console.log(err))

// }