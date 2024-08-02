import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div className="app">
      <CharacterList onCharacterClick={setSelectedCharacterId} />
      <CharacterDetail characterId={selectedCharacterId} />
    </div>
  );
};

export default App;
