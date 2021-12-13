import React from "react";

function Modal({ onClose, currentPhoto }) {
  //destructure currentPhotos to use in return
  const { name, category, description, index } = currentPhoto;
  //   console.log(name);
  //   console.log(category);
  //   console.log(description);
  //   console.log(index);
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
//Photolist is importing
//Modal is child to Photolist
//Modal is activated in the Photolist return.
