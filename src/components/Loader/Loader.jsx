import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <ThreeDots
      wrapperStyle={{ justifyContent: 'center' }}
      height="80"
      width="80"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};

export default Loader;
