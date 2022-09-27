import Button from 'components/Button';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import { getImagesApi } from './../../utils/imagesApi';

getImagesApi();

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <ul className="gallery">
        <ImageGalleryItem images={images} />
        <Button />
        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
      </ul>
    );
  }
}

export default ImageGallery;
