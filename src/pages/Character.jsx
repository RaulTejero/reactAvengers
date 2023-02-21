import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../services/data";
import "../styles/characters.css";

export const Character = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=68ba298b201d8e49464efa89de99047a"
    ).then((data) => setCharacters(data.data.results));
  }, []);

  return (
    <div className="characters">
      <div className="characters-section">
        {characters
          ? characters.map((el) => (
              <div className="characters-section-card" key={el.id}>
                <Link to={`/characters/${el.id}`}>
                  <div
                    className="characters-section-card-img"
                    style={{
                      backgroundImage: `url(${el.thumbnail.path}.${"jpg"})`,
                    }}
                  ></div>
                </Link>
                <p className="characters-section-card-name">{el.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
