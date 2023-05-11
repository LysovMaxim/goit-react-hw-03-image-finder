import css from './Modal.module.css';

export const Modal = ({ urlPhoto,onClose }) => {
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  })


  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={urlPhoto} alt="" />
      </div>
    </div>
   
  );
};
