const API = 'https://pokeapi.co/api/v2/pokemon/';

const fetchData = async (pokemon) => {
  const data = await fetch(`${API}${pokemon}`);
  const res = await data.json();
  return res;
};

export default fetchData;
