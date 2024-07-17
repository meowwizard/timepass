// src/App.tsx
import React from 'react';
import PokemonMap from './components/PokemonMap';
import PokemonLocation from './components/PokemonLocation';
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pokémon Map</h1>
      <PokemonMap pokemonId={546} />
      <PokemonLocation pokemonId={546}/>
    </div>
  );
};

export default App;
