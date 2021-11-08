import React from "react";


const LocalModal = ({ props,id = "idModal", onClose = () => { } }) => {
    const handleOutSideClick = (e) => {
        if (e.target.id === id) onClose();
    }
    console.log(props)
    return (
        <div id={id} className="mainModal" onClick={handleOutSideClick}>
            <div className="container"> <h1> oi </h1>
                <button className="close" onClick={onClose} />
                <div className="content">   </div>


            </div>
        </div>
    );
};

export default LocalModal