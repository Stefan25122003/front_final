import logo from './logo.svg';
import './App.css';
import RecipeCards from './RecipeCards.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Header } from './components/Header/Header.jsx';

function App() {
  return (
   <>
      <Navbar />
      <Header />
      <RecipeCards/>
      
   </>
  );
}

export default App;
