export const getData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json())
    .then((result) => result);
};
