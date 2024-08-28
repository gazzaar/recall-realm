import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import fetchData from '../services/getData';
import { names } from '../assets/names';
import Header from './Header';
const Cards = () => {
  const [pokemonsArray, setPokemonsArray] = useState([
    {
      id: uuidv4(),
      name: '',
      url: '',
    },
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const pokemons = async () => {
    const pokemonArray = [];
    for (let name of names) {
      const result = await fetchData(name);
      setLoading(false);
      pokemonArray.push({
        id: uuidv4(),
        name: result.name,
        url: result.sprites.front_default,
      });
    }
    shufflePokemonsMount(pokemonArray);
  };

  const shufflePokemons = () => {
    let currentIndex = pokemonsArray.length;
    const array = pokemonsArray;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setPokemonsArray(array);
  };

  const shufflePokemonsMount = (pokemons) => {
    let currentIndex = pokemons.length;
    const array = pokemons;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setPokemonsArray(array);
  };

  const checkHighScore = () => {
    if (score > bestScore) setBestScore(score);
  };

  const resetGame = () => {
    checkHighScore();
    setScore(0);
    setSelectedPokemons([]);
    shufflePokemons();
  };

  const notClickedPreviousPokemon = (name) => {
    if (!selectedPokemons.includes(name)) return true;
    resetGame();
  };

  const selectPokemon = (pokemon) => {
    if (notClickedPreviousPokemon(pokemon.name)) {
      setSelectedPokemons([...selectedPokemons, pokemon.name]);
      setScore((score) => score + 1);
      shufflePokemons();
    }
  };

  useEffect(() => {
    pokemons();
  }, []);

  if (loading) return <p> Loading...</p>;
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <div className='grid grid-cols-6 gap-6'>
        {pokemonsArray.map((pokemon) => {
          return (
            <Card
              pokemon={pokemon}
              key={pokemon.id}
              selectPokemon={selectPokemon}
            />
          );
        })}
      </div>
    </>
  );
};
export default Cards;
