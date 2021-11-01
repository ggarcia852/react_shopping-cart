import React, { useState, useEffect } from "react";
import UserDetails from "../components/UserDetails";


export default function Users(props){
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/api/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return(
        <div>
        <h1>Users</h1>
        {user.map((u, i) => <UserDetails key={i} user={u} />)}
        </div>
    )
}