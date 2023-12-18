import { useEffect } from 'react';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleContentClick = event => {
    event.stopPropagation();
  };

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleClickOutside}>
      <div className="Modal" onClick={handleContentClick}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
