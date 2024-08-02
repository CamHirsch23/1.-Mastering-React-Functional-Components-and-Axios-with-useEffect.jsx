import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const publicKey = '<YOURPUBLICKEY>';
      const privateKey = '<YOURPRIVATEKEY>';
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);
      const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
      try {
        const response = await axios.get(url);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <div key={character.id} onClick={() => onCharacterClick(character.id)}>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
