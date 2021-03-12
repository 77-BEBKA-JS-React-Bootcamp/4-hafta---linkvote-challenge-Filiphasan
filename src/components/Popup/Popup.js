import React from 'react'
import './Popup.css'

const Popup = ({ popup, setPopup, doRemoveLink }) => {
    if (popup.visible) {
        return (
            <>
                <div className="popup-bg"></div>
                <div className="popup">
                    <div className="popup-title">
                        <p>Remove Link</p>
                        <button onClick={() => { setPopup({ msg: '', lnk: {}, visible: false }) }}>X</button>
                    </div>
                    <div className="popup-body">
                        <p>Do you want to remove:</p>
                        <h4>{popup.msg}</h4>
                    </div>
                    <div className="popup-btns">
                        <button onClick={() => { doRemoveLink(popup.lnk); setPopup({ msg: '', lnk: {}, visible: false }); }}>OK</button>
                        <button onClick={() => { setPopup({ msg: '', lnk: {}, visible: false }) }}>CANCEL</button>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }


}

export default Popup
