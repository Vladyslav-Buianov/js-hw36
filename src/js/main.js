import { getImages } from './api.js';
import { renderImages, showButton, hideButton } from './render.js';

const btnRef = document.querySelector(".render__btn");
const LIMIT = 12;
let page = 1;
let savedImages = JSON.parse(localStorage.getItem("gallery_images")) || [];

function fetchAndRender(pageToFetch) {
  getImages(pageToFetch)
    .then((data) => {
      const hits = data.hits;
      if (!hits || hits.length === 0) {
        hideButton();
        return;
      }
      renderImages(hits);
      showButton();
      savedImages = [...savedImages, ...hits];
      localStorage.setItem("gallery_images", JSON.stringify(savedImages));
      if (hits.length < LIMIT) {
        hideButton();
      }
    })
    .catch((error) => {
      console.error("Не знайдено фотографій:", error);
      hideButton();
    });
}

if (savedImages.length > 0) {
  renderImages(savedImages);
  showButton();
  page = Math.ceil(savedImages.length / LIMIT);
} else {
  hideButton();
  fetchAndRender(page);
}

btnRef.addEventListener('click', () => {
  page += 1;
  fetchAndRender(page);
});