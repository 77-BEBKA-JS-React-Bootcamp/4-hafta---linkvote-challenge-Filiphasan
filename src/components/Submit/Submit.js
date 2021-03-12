import React from 'react';
import { Link } from 'react-router-dom';
import './Submit.css';

const Submit = () => {
    return (
        <div className="container">
            <div className="submit-container">
                <div className="submit-box">
                    <Link to="add" className="submit-link">
                        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" alt="Add Link" />
                    </Link>
                    <h2>Submit a link</h2>
                </div>
            </div>
        </div>
    )
}

export default Submit
