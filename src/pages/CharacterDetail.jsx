import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "../services/data";
import "../styles/character-detail.css";

export const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY_MARVEL);
    getCharacterDetail(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.REACT_APP_API_KEY_MARVEL}`
    ).then((data) => {
      setCharacter(data.data.results[0]);
    });
  }, [id]);

  return (
    <div className="character-detail">
      {character ? (
        <div className="character-detail-section">
          <img
            className="character-detail-section-img"
            src={`${character.thumbnail.path}.jpg`}
            alt=""
          />
          <div className="character-detail-section-info">
            <p className="character-detail-section-info-name">
              {character.name}
            </p>
            <p className="character-detail-section-info-description">
              Descripción:
              {character.description !== ""
                ? ` ${character.description}`
                : " No existe"}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
