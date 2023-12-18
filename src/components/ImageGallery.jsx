import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map((image, index) => (
      <ImageGalleryItem key={index} image={image} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGallery;