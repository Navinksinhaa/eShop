
import './App.css';
import Header from './header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as  Router,Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>

     
        
        <Switch>

          <Route path="/" exact>
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
        </Switch>
    

     </Router>
      <Header/>
      <Home />
    </div>
  );
}

export default App;
