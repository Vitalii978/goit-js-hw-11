import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '50855680-e7e32480db9ff9b763cd16451';
const BASE_URL = 'https://pixabay.com/api/' 

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(requestImages);
}

  function requestImages(response) {
  const imageArray = response.data.hits;
  if (imageArray.length === 0) {
    iziToast.warning({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
    return [];
  }
    return imageArray;
}