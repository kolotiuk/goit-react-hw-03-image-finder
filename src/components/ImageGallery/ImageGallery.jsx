import Button from 'components/Button';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import { getImagesApi } from './../../utils/imagesApi';
import Loader from './../Loader/Loader';
import s from './ImageGallery.module.scss';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ images: [], page: 1 });
    }
    // умова яка перевіряє чи page міняється, якщо помінявся то вона спрацьовує
    if (prevState.page !== this.state.page) {
      this.getImages();
    }
  }

  // метод який дозаписує дані ті що прийшли з бекенду по кнопці Load more
  getImages = () => {
    // перед запитом включаємо індикатор завантаження
    this.setState({ isLoading: true });
    // в результаті успішного запиту ми записуємо наші дані в images
    getImagesApi(this.props.query, this.state.page)
      // беремо prev повертаємо обєкт в якому буде перезаписувати поле images в яке буде записувати новий масив в який покладе prev.images і добавить нові images які приходять із бекенду
      .then(images =>
        this.setState(prev => ({ images: [...prev.images, ...images] }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMoreImages = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
          })}
          {images.length > 0 && (
            <Button handleLoadMoreImages={this.handleLoadMoreImages} />
          )}
        </ul>
        {/* {error && <p>{error.message}</p>} */}
        {isLoading && <Loader />}
      </>
    );
  }
}

export default ImageGallery;
