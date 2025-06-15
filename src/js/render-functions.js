import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const form = document.querySelector('.form');

let lightbox = new SimpleLightbox('.gallery a', {});

export function createGallery(images) {
  const markup = images
    .map(
  ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width='360'/>
        </a>
        <ul class='list'>
      
      <li class='item'>
         <span>Likes</span>
         <span>${likes}</span>
        </li>

        <li class='item'>
          <span>views</span>
         <span>${views}</span>
         </li>

         <li class='item'>
          <span>comments</span>
         <span>${comments}</span>
         </li>

         <li class='item'>
          <span>downloads</span>
         <span>${downloads}</span>
         </li>
       </ul>
      </li>`      
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}