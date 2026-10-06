const listRef = document.querySelector(".list");
const btnRef = document.querySelector(".btn");

export function renderImages(array) {
  const imagesMarkup = array
    .map(({ id, tags, webformatURL }) => {
      return `<li id='${id}'>
  <img src="${webformatURL}" alt="${tags}">
</li>`;
    })
    .join('');

  listRef.insertAdjacentHTML('beforeend', imagesMarkup);
}

export function showButton() {
  btnRef.style.display = "block";
}

export function hideButton() {
  btnRef.style.display = "none";
}