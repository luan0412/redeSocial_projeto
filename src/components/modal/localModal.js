import React from "react";


const LocalModal = ({ id = "modelo", onClose = () => { }, children }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }
    return <div id={id} className="mainModal" onClick={handleOutsideClick}>
        <div className="container">
            <button className="close" onClick={onClose}>Fechar</button>
            <div className="content"> {children}
            </div>
        </div>
    </div>
};

export default LocalModal