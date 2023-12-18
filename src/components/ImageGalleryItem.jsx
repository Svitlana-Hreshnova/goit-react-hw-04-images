const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick(image.largeImageURL);
    }
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt=""
        onClick={handleClick}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
