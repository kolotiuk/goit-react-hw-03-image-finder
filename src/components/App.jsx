import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={'onSubmit'} />
        <ImageGallery query={query} />
      </div>
    );
  }
}

export default App;
