import React from 'react'
import './Linkdetail.css'
const Link = ({ link, removeLink, setLinkVote }) => {
    return (
        <div className="link" >
            <div className="link-point">
                <h3>{link.points}</h3>
                <p>POINTS</p>
            </div>
            <div className="link-info">
                <div className="link-text">
                    <h3>{link.name}</h3>
                    <p>({link.url})</p>
                </div>
                <div className="link-vote">
                    <button onClick={() => { setLinkVote(link, true) }}>&#129137; Up Vote</button>
                    <button onClick={() => { setLinkVote(link, false) }}>&#129139; Down Vote</button>
                </div>
            </div>
            <button className="highlight-btn" title="Remove" onClick={() => { removeLink(link) }}>-</button>
        </div>
    )
}

export default Link
