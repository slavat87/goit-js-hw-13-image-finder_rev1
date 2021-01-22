import imagesService from './js/apiService.js';
import renderItems from './js/render.js';
import refs from './js/refs.js';

import './styles.css';

refs.form.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', loadMore);

function loadMore() {
  if (
    imagesService.newPage * imagesService.perPage <
    imagesService.totalItems
  ) {
    imagesService.newPage = imagesService.newPage + 1;
    renderItems();
  }
}

function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  imagesService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();
  imagesService.reset();
  renderItems();
  refs.loadMoreBtn.style.display = 'block';
}
