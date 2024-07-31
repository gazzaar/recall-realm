const Header = ({ score, bestScore }) => {
  return (
    <>
      <div className='flex  items-center mt-3 mb-3'>
        <div className=''>
          <h1 className='font-sans italic text-5xl text-center font-bold text-[#BCF1DB] '>
            Recall Realm
          </h1>
        </div>
        <div className='ml-auto'>
          <p className='text-[#BCF1DB] font-sans text-3xl'> score: {score}</p>
          <p className='text-[#BCF1DB] text-3xl'>Best score: {bestScore}</p>
        </div>
      </div>
    </>
  );
};
export default Header;
