import React, { useEffect, useState } from "react";
import { getCharacters, getComics } from "../services/data";
import "../styles/home.css";

export const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [comics, setComics] = useState(null);

  useEffect(() => {
    getCharacters(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=68ba298b201d8e49464efa89de99047a"
    ).then((data) => setCharacters(data.data.results));

    getComics(
      "https://gateway.marvel.com:443/v1/public/comics?apikey=68ba298b201d8e49464efa89de99047a"
    ).then((data) => setComics(data.data.results));
  }, []);

  return (
    <div
      className="home"
      style={
        characters
          ? {
              backgroundImage: `url(${characters[10].thumbnail.path}.${'jpg'})`,
            }
          : null
      }
    >
      {comics ? (
        <section className="home-section home-section-comics">
          <div>
            <img
              src={`${comics[2].thumbnail.path}.${comics[2].thumbnail.extension}`}
              alt=""
            />
            <p>Creado por:{comics[2].creators.items[0].name}</p>
          </div>

          <div>
            <img
              src={`${comics[4].thumbnail.path}.${comics[4].thumbnail.extension}`}
              alt=""
            />
            <p>Creado por: {comics[4].creators.items[0].name}</p>
          </div>

          <div>
            <img
              src={`${comics[8].thumbnail.path}.${comics[8].thumbnail.extension}`}
              alt=""
            />
            <p>Creado por: {comics[8].creators.items[0].name}</p>
          </div>
        </section>
      ) : null}
      {characters ? (
        <section className="home-section home-section-characters">
          <img src={`${characters[0].thumbnail.path}.${"jpg"}`} alt=""></img>

          <img src={`${characters[4].thumbnail.path}.${"jpg"}`} alt=""></img>

          <img src={`${characters[13].thumbnail.path}.${"jpg"}`} alt=""></img>

          <img src={`${characters[7].thumbnail.path}.${"jpg"}`} alt=""></img>

          <img src={`${characters[8].thumbnail.path}.${"jpg"}`} alt=""></img>
        </section>
      ) : null}
    </div>
  );
};
