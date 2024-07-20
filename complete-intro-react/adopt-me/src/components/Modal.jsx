import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children }) {
  var elemRef = useRef(null);

  if (!elemRef.current) {
    elemRef.current = document.createElement('div');
  }

  useEffect(() => {
    let modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elemRef.current);

    return function purgeModal() {
      modalRoot.removeChild(elemRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elemRef.current);
}

export default Modal;
