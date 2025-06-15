import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const searchInput = form.elements['search-text'];
  const query = searchInput.value.trim();

  if (query === '') {

      form.reset();
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(createGallery)
      
    .catch(console.log)
     
    .finally(hideLoader);
    
    form.reset();
})