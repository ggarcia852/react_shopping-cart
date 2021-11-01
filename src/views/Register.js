import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null
            }
        }
    handleSubmit = (e) =>{
        e.preventDefault();
        
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')

        let password = e.target.password.value
        let confirmPass = e.target.confirmPass.value
        if(password !== confirmPass){
            this.setState({
                redirect: '/register'
            })
        }

        let data = JSON.stringify({
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        })

        fetch('https://kekambas-bs.herokuapp.com/api/users', {
            method: 'POST',
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                    this.setState({
                    redirect: '/login'
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.redirect ? <Redirect to={this.state.redirect} /> : 
        
            <form  onSubmit={this.handleSubmit} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div className='form-group col-8'>
                <h2 className='text-center pt-5 pb-3'>Create an Account:</h2>
                    <fieldset>
                        <label htmlFor='firstName'>First Name:</label>
                        <input type='text' name='firstName' className='form-control' placeholder='First Name' />
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input type='text' name='lastName' className='form-control' placeholder='Last Name' />
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' name='email' className='form-control' placeholder='Email' />
                    </fieldset>

                    <fieldset>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' className='form-control' placeholder='Username' />
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' className='form-control' placeholder='Password' />
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor='confirmPass'>Confirm Password:</label>
                        <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
                    </fieldset>
                    <br />
                    <input type='submit' className='btn btn-dark' />
                    <div className='col pt-1'>
                         <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/7-Best-Reasons-To-Use-React.js-Components-In-Your-Project-1024x512.png.webp" className='image-fluid rounded-circle mx-auto d-block' width='333' alt='react' />
                    </div>
                </div>
            </form>
        )
    }
}
