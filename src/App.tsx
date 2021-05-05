import Navbar from './components/Navbar';
import Filter from './views/Filters';
import Home from './views/Home'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
