import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import CreateNewPlayer from './components/CreateNewPlayer';
import Header from './components/Header';
import Show from './pages/Show';
import ShowDetails from './pages/ShowDetails';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <CreateNewPlayer />
          <Link to="/show">
          <button type="submit" class="btn btn-primary mb-3">Sign Up</button>
          </Link>
          
        </Route>

        <Route path="/show" exact>
            <Show />
        </Route>

        <Route path="/show/:id">
            <ShowDetails />
          </Route>

      </Switch>

      
      
    </div>
    </Router>
  );
}

export default App;
