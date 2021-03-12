import React from 'react'
import './Select.css'

const Select = ({ sortAtoZ, sortZtoA }) => {
    const onChangeHandler = (e) => {
        const value = e.target.value;
        switch (value) {
            case "0":
                sortZtoA();
                break;

            case "1":
                sortAtoZ();
                break;
        }
    }
    return (
        <div className="select-order">
            <select onChange={onChangeHandler}>
                <option default value="-1">Order by</option>
                <option value="0" >Most Voted (Z → A)</option>
                <option value="1" >Most Voted (A → Z)</option>
            </select>
            <p>▼</p>
        </div>
    )
}

export default Select
