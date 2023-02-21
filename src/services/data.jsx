export const getCharacters = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((result) =>result);
};

export const getComics = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((result) =>result);
};

export const getCharacterDetail = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((result) =>result);
};
