import imagesService from './apiService.js';
import refs from './refs.js';
import templates from '../templates/photo_card.hbs';

const markup = cards => {
  return templates(cards);
};

const render = () => {
  let p = null;

  imagesService.fetchCard().then(({ hits, page }) => {
    p = page;
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      `<div class='scroll-page' id='scroll-page-${page}'>${markup(hits)}</div>`,
    );

    setTimeout(function () {
      const container = document.querySelector(`#scroll-page-${p}`);
      window.scrollTo({
        top: container.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
  });
};

export default render;
