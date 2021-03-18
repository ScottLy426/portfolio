import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import ReactSnippets from './Pages/ReactSnippets';
import VanillaJavascript from './Pages/VanillaJavascript';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/reactsnippets" exact>
                <ReactSnippets />
              </Route>
              <Route path="/vanillajavascript" exact>
                <VanillaJavascript />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;