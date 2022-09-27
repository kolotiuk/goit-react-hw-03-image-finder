import s from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL, openModal }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={() => openModal(largeImageURL)}>
      <img className={s['ImageGalleryItem-image']} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
