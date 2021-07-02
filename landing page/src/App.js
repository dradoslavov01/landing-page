import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import ActionPage from './Components/ActionPage/ActionPage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/request" component={ActionPage} />
    </div>
  );
}

export default App;
