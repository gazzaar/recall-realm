import Cards from './components/Cards';
import pokemonBackground from './assets/images/pokemon-background.jpg';
import Footer from './components/Footer';
function App() {
  const styles = {
    backgroundImage: `url(${pokemonBackground})`,
  };
  return (
    <>
      <div
        className='p-5 bg-cover bg-center min-h-screen bg-no-repeat'
        style={styles}
      >
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
