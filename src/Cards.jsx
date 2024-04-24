import React, { useState, useEffect } from 'react';
import './Cards.css';
import myImage from './Photos/Lasagna.jpg';
import Modal from './modal'; // Importăm componenta Modal

function Cards() {
    const Lasagna = 'Some description';
    const [modalOpen, setModalOpen] = useState(false); // Starea pentru controlul deschiderii și închiderii modalei

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    // Acest efect se va declanșa de fiecare dată când starea modalOpen se schimbă
    useEffect(() => {
        if (modalOpen) {
            // Dacă modalul este deschis, adăugăm clasa 'no-scroll' la body
            document.body.classList.add('no-scroll');
        } else {
            // Dacă modalul este închis, eliminăm clasa 'no-scroll' de la body
            document.body.classList.remove('no-scroll');
        }
    }, [modalOpen]);

    return(
        <div className="card">
            <img src={myImage} alt={Lasagna} className="card-img"/>
            <div className="card-body">
                <h5 className="card-title">{Lasagna}</h5>
                <button className="btn btn-primary" onClick={toggleModal}>Details</button> {/* Butonul care deschide modalul */}
            </div>
            {modalOpen && <Modal toggleModal={toggleModal} />} {/* Renderizăm modalul doar dacă este deschis */}
        </div>
    );
}

export default Cards