const Card = ({ pokemon, selectPokemon }) => {
  return (
    <>
      <div
        className='flex flex-col cursor-pointer bg-gradient-to-br from-blue-200 to-green-200 p-3 rounded-lg  items-center justify-center  pb-5 hover:scale-105 transition duration-300 hover:shadow-2xl

'
        onClick={() => selectPokemon(pokemon)}
      >
        <img src={pokemon.url} alt={pokemon.name}></img>
        <p className='text-xl text-gray-800'>{pokemon.name}</p>
      </div>
    </>
  );
};
export default Card;
