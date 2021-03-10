import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import FAQ from './components/FAQ';

function App() { 
  return ( 
    <div className="App"> 
      <Router> 
        <Header /> 
        <Switch> 
          <Route path="/" component={Home} exact /> 
          <Route path="/users" component={Product} exact /> 
          <Route path="/faq" component={FAQ} exact /> 
        </Switch> 
      </Router> 
    </div> 
  ); 
} 

export default App;
