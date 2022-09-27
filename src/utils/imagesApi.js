import axios from 'axios';

const API_KEY = '25802265-f217fc33d7f2a9a9b0a0a0132';

// const defaultParams = '?&image_type=photo&orientation=horizontal';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// const URL = ;

export const getImagesApi = ({ q, page }) => {
  axios.defaults.params = {
    q,
    key: API_KEY,
    page,
    per_page: 12,
  };

  return axios.get().then(({ data }) => data.hits);
};
