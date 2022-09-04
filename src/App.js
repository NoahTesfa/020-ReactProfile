import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/portfolio'>
            <Portfolio/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
