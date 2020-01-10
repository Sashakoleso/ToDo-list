import React from 'react';
import T from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modal_size}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        obcaecati!
      </p>
      <button type="button" onClick={closeModal}>
        X
      </button>
    </div>
  );
};
Modal.propTypes = {
  closeModal: T.arrayOf(T.shape({})).isRequired,
};

export default Modal;
