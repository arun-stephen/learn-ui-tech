
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Main from './component/main';
import cardDetails from './data/film_info';

function App() {
  return (
    <>
      <Header />
      <Main data={cardDetails} />
      <Footer />
    </>
  );
}

export default App;
