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

  getImages = () => {
    // перед запитом включаємо індикатор завантаження
    this.setState({ isLoading: true });
    // в результаті успішного запиту ми записуємо наші дані в images
    getImagesApi(this.props.query, this.state.page)
      .then(images => this.setState({ images }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.getImages();
    }
  }

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <>
        <ul className="gallery">
          {images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </ul>
        {images.length > 0 && <Button />}
        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
      </>
    );
  }
}

export default ImageGallery;
