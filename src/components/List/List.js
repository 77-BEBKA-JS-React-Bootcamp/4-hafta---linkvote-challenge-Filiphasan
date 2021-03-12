import React from 'react'
import Linkdetail from '../Linkdetail/Linkdetail'
import Select from '../Select/Select'
import './List.css'


const List = ({ links, sortAtoZ, sortZtoA, removeLink, setLinkVote }) => {
    return (
        <div className="container">
            <div className="list">
                <Select sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
                {
                    links.map(link => {
                        return (
                            <Linkdetail key={link.url} setLinkVote={setLinkVote} link={link} removeLink={removeLink} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List
