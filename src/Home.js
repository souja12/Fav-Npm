import React from 'react'
import './App.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    // const [data, setData] = useState()

    // function getData() {
    //     localStorage.getItem('home', profile_data);
    //     console.log(home)
    // }
    return (
        <div>
            <div className='head'>
                <h1>Welcome To Favorite NPM Package</h1>
                <Link to='/add'>
                    <button class='btnn btn-danger'>Add New</button>
                </Link>
            </div>
        </div>

    )
}

export default Home