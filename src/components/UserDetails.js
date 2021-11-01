import React, { Component } from 'react'

export default class UserDetails extends Component {
    render() {
        return (
            <div>
                Id: {this.props.user.id}, Username: {this.props.user.username}, Name: {this.props.user.first_name} {this.props.user.last_name}, Email: {this.props.user.email}
            </div>
        )
    }
}
