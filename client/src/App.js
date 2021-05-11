import './App.css';
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import ScrollToTop from './helpers/ScrollToTop'

// import th screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/products/:id" exact component={ProductScreen}/>
          <Route path="/products" exact component={ProductsScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
