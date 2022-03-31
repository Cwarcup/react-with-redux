import React from 'react';
import ReactDOM from 'react-dom';

// create a portal to render the modal in
// need these divs to be rendered directly from the body element.

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">dsfgsdfgsdfg</div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
