import React from 'react'
import { useState } from "react";
import axios from "axios";
import './App.css';

const Add = () => {
    const [searchQuery, setSearchQuery] = useState()
    const [timeoutID, setTimeoutID] = useState()
    const [results, setResults] = useState()
    const [name, setName] = useState(localStorage.getItem('name') ? localStorage.getItem('name') : [])


    const fetchData = async (searchString) => {
        const response = await axios.get(
            `https://api.npms.io/v2/search?q=${searchString}`
        )
        setResults(response.data.results);
    }

    const onTextChanged = (event) => {
        clearTimeout(timeoutID)
        setSearchQuery(event.target.value)
        const timeout = setTimeout(() => {
            fetchData(event.target.value)
        }, 500)
        setTimeoutID(timeout)
    }

    function handleClick() {
        // var neww = document.querySelector('input[name="gen"]:checked').value

        // let profile = {
        //     neww: neww
        // }

        // console.log(profile)
        const saveName = name

        localStorage.setItem('name', name)
    }

    return (
        <div className="mt-5">
            <h3>search for npm packages</h3>
            <input className="input" type="text" value={searchQuery} onChange={onTextChanged} placeholder="Search..." />
            <form name='form'>
                <div className="map">
                    {results && results.map((value) => {
                        return (
                            <>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gen" id="exampleRadios1"
                                        value={value.package.name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <label class="form-check-label" for="exampleRadios1">
                                        {value.package.name}
                                    </label>
                                </div>
                            </>
                        );
                    })}
                </div>
                <input className='inputt' required />
                <button className='btn btn-primary my-2 ' type='submit' onClick={handleClick} >Submit</button>
            </form>
            <div>{localStorage.getItem('name')}</div>
        </div>

    )
}

export default Add