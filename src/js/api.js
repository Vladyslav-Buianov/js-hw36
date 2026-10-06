const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "57619990-0b83a72e5311572d43b501e51";
const LIMIT = 12;

export function getImages(page = 1) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&page=${page}&per_page=${LIMIT}&orientation=horizontal&editors_choice=true`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Errore HTTP: ${res.status}`);
    }
    return res.json();
  });
}