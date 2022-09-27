import s from './Button.module.scss';

const Button = ({ handleLoadMoreImages }) => {
  return (
    <button className={s.Button} onClick={handleLoadMoreImages}>
      Load more
    </button>
  );
};

export default Button;
