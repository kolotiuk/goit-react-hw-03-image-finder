const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
