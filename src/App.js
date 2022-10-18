import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [sprite, setSprite] = useState('https://freepngimg.com/thumb/pokemon/37458-9-pokeball-transparent.png');
  // const [errorMessage, setErrorMessage] = useState('');

  const getPokemon = async (e) => {
    e.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    await axios.get(url).then((response) => {
      setPokemonName(response.data.species?.name);
      setSprite(response.data.sprites?.front_default);
    })
  }
  return (
    <div className='container flex-col'>
      <img src={sprite} className='sprite' />
      <h1>{pokemonName}</h1>
      <form onSubmit={getPokemon} className='flex-col'>
        <label className='label'>Get the Pokemon</label>
        <input type='text' className='input' value={pokemon} onChange={(e) => setPokemon(e.target.value)} placeholder='Enter a Pokemon...'/>
        {/* {errorMessage} */}
        <button className='btn'>Search Pokemon</button>
      </form>
    </div>
  );
}

export default App;
