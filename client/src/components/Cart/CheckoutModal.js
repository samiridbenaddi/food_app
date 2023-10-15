import React, { useContext, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import CartContext from "../store/cartcontext";
import "./CheckoutModal.module.css";
import styled from "styled-components";

Modal.setAppElement("#root");

//Bouton stylisé pour une icône de fermeture
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px; /* Adjust font size as needed */
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

function CheckoutModal({ openModal, closeModal, modalIsOpen }) {
  const cartCtx = useContext(CartContext);
  const [formData, setFormData] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Adresse: "",
    Ville: "",
    CodePostal: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);

    fetch("http://localhost:5000/utilisateur", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((s) => s.json())
      .then((user) => {
        let UtilisateurId = user._id;
        let ListeProduits = cartCtx.items;
        const ListeProduitsNames = ListeProduits.map((item) => {
          return { Titre: item.name, Quantite: item.amount };
        });
        fetch("http://localhost:5000/valider-panier", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ListeProduits: ListeProduitsNames,
            UtilisateurId,
          }),
        }).then((resp) => {
          if (resp.ok) {
            Swal.fire({
              title: "Successful!",
              text: "Your order is on the way",
              icon: "success",
            }).then((result) => {
              if (result.isConfirmed || result.isDismissed) {
                window.location.reload();
              }
            });
            closeModal();
            console.log(ListeProduits);
            ListeProduits.forEach((prod) => cartCtx.removeItem(prod.id));
            setFormData({
              Nom: "",
              Prenom: "",
              Email: "",
              Adresse: "",
              Ville: "",
              CodePostal: "",
            });
          }
        });
      });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Client informations"
    >
      <CloseButton onClick={closeModal}>&#x2716;</CloseButton>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nom">Nom: </label>
          <input
            type="text"
            id="Nom"
            name="Nom"
            value={formData.Nom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Prenom">Prenom:</label>
          <input
            type="text"
            id="Prenom"
            name="Prenom"
            value={formData.Prenom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Adresse">Adresse:</label>
          <input
            type="text"
            id="Adresse"
            name="Adresse"
            value={formData.Adresse}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Ville">Ville:</label>
          <input
            type="text"
            id="Ville"
            name="Ville"
            value={formData.Ville}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="CodePostal">Code Postal:</label>
          <input
            type="text"
            id="CodePostal"
            name="CodePostal"
            value={formData["CodePostal"]}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
}

export default CheckoutModal;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
