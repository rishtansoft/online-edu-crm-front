import React, { useState } from 'react';
import './styles/App.css';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={openModal}>Modalni ochish</button>
      {modalVisible && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Modal Oyning Tarkibi Bu Yerda Bo'lishi Mumkin</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
