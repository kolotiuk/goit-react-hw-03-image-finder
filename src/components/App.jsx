import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    isModalOpen: false,
    modalImg: null,
  };
  // перезаписуємо значення query
  onSubmit = query => {
    this.setState({ query: query });
  };

  toggleModal = (modalImg = null) => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalImg: modalImg,
    }));
  };

  render() {
    const { query, isModalOpen, modalImg } = this.state;
    const { onSubmit, toggleModal } = this;

    return (
      <div className="App">
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery query={query} toggleModal={toggleModal} />
        {isModalOpen && <Modal modalImg={modalImg} />}
      </div>
    );
  }
}

export default App;
