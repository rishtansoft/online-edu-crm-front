import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";

function ModalCreateTeacher() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>O'qtuvchi Qo'shish </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <>
          <form class="form">
            <p class="title">Register</p>
            <p class="message">Signup now and get full access to our app. </p>
            <div class="flex">
              <label>
                <input
                  class="input"
                  type="text"
                  placeholder="Fristname"
                  required=""
                />
              </label>

              <label>
                <input
                  class="input"
                  type="text"
                  placeholder="Lstname"
                  required=""
                />
              </label>
            </div>

            <label>
              <input class="input" type="text" placeholder="Role" required="" />
            </label>

            <label>
              <input
                class="input"
                type="password"
                placeholder="password"
                required=""
              />
            </label>
            <label>
              <input
                class="input"
                type="number"
                placeholder="Phone number"
                required=""
              />
            </label>
            <button onClick={closeModal} class="submit">
              Submit
            </button>
            <p class="signin">
              Already have an acount ? <a href="#">Signin</a>{" "}
            </p>
          </form>
        </>
      </Modal>
    </div>
  );
}

export default ModalCreateTeacher;
