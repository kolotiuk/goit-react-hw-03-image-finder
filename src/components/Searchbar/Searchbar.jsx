import { Component } from 'react';
import s from './Searchbar.module.scss';

class Searchbar extends Component {
  // інпут відповідає за те що вводить юзер в інпут
  state = {
    input: '',
  };
  // метод який змінює input
  handleChangeInput = e => {
    this.setState({ input: e.target.value });
  };
  // метод який відправляє дані по сабміт
  handleSubmit = e => {
    e.preventDefault();
    // викликає функцію яка передається в пропсі і передаємо те що ввів юхер в інпут
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            value={this.state.input}
            className={s['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
