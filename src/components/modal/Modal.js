import React, { useState } from 'react';
import LocalModal from './localModal';
import Amigos from '../../pages/Amigos';
import '../modal/styles.scss'

function Modal(props) {
    
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="modelo">
            {
                <div className="AmigosMain" >
                    
                </div>    
            }
            {isModalVisible ? (
                <LocalModal  onClose={() => setIsModalVisible(false)}>
                    <h1> modal loko </h1>

                </LocalModal>
            ) : null}

        </div>
    );
}
export default Modal;
