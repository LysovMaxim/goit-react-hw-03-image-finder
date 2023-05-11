import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() { 
window.addEventListener("keydown" ,this.hendleKeyDown)
  }
  
  componentDidUpdate() {
    window.addEventListener("keydown",this.hendleKeyDown)
  }

  hendleKeyDown = (event) =>{
    if (event.code === "Escape") {
      this.props.onClose();
    }
  }


render(){
    return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={this.props.urlPhoto} alt="" />
      </div>
    </div>
   
  );
}

};
