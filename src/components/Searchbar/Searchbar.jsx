import s from './Searchbar.module.scss';

const Searchbar = () => {
  return (
    <header class={s.Searchbar}>
      <form class={s.SearchForm}>
        <button type="submit" class={s['SearchForm-button']}>
          <span class={s['SearchForm-button-label']}>Search</span>
        </button>

        <input
          class={s['SearchForm-input']}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
