import Navbar from './components/Navbar';
import Home from './views/Home'
import {Route,Switch} from 'react-router-dom'
import SingleCountry from './components/SingleCountry'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Switch>
      <Route exact path="/" component={Home}></Route> 
      <Route
					path="/country/:query"
						render={(props) => 
							<SingleCountry  country={ props.match.params.query } />
						}
					></Route>
          </Switch>
    </div>
    
  );
}

export default App;

					
	
			