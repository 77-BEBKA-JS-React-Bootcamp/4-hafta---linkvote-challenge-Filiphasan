import React from 'react'
import { Link } from 'react-router-dom'
import './Add.css'

const Add = ({ setAlert, addLink }) => {
    const onSubmitForm = (e) => {
        e.preventDefault();
        setAlert({ msg: `${e.target.name.value} added.`, visible: true });
        addLink({ name: e.target.name.value, url: e.target.url.value, points: 0 });
    }
    return (
        <div className="container">
            <div className="return-list">
                <Link to="/">
                    &#8592; Return To List
                </Link>
            </div>
            <div className="add-form">
                <h2>Add New Link</h2>
                <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label>Link Name:</label>
                        <input name="name" type="text" placeholder="e.g. Alphabet" />
                    </div>
                    <div className="form-group">
                        <label>Link URL:</label>
                        <input name="url" type="text" placeholder="e.g. http://abc.xyz" />
                    </div>
                    <button type="submit">ADD</button>
                </form>
            </div>
        </div>
    )
}

export default Add
