import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const modalRef = document.querySelector('.modal');

const Modal = ({ modalImg }) => {
  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>
        modal
        <img src={modalImg} alt="" />
      </div>
    </div>,
    modalRef
  );
};

export default Modal;

//  <div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>
