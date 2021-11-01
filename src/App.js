import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductDetails from './components/ProductDetails'
import Cart from './views/Cart'
import Home from './views/Home'
import Products from './views/Products'
import Register from './views/Register'
import Users from './views/Users'
import { Login } from './views/Login';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn : localStorage.getItem('token'),
      shoppingCart: null,
    }
  }

  // handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   this.setState({
  //       shoppingCart: []
  //   })
  // }

  logOut = () =>{
    localStorage.removeItem('token')
    this.setState({
      loggedIn: null
    })
  }
  
  logIn = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let encodedString = btoa(`${username}:${password}`);
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Basic ${encodedString}`);
  
    fetch('https://kekambas-bs.herokuapp.com/api/token', {
        method: 'POST',
        headers: myHeaders
    }).then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data['token'])
  
            this.setState({
              loggedIn: data['token'],
              shoppingCart: []
            })
        })
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavBar loggedIn={this.state.loggedIn} logOut={this.logOut} />
        <div className="container">
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/products'>
            <Products handleClick={this.handleClick}/>
          </Route>
          <Route exact path='/products/:id' component={ProductDetails} />

          <Route exact path='/my-cart'>
            <Cart />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/login'>
            <Login handleSubmit={this.logIn} loggedIn={this.state.loggedIn}/>
          </Route>

          <Route exact path='/users'>
            <Users />
          </Route>
        </div>
      </div>
    )
  }
}

