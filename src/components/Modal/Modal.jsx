import css from './Modal.module.css';

export const Modal = ({picture}) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={console.log(picture)} alt="" />
      </div>
    </div>
   
  );
};
