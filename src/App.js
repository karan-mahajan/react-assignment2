import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:id' component={BookDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
