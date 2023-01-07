import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from './components/Details/Details';
import NavBar from './components/NavBar/NavBar';
import Login from "./components/Login/Login"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/products/:id' component={Details} />
      <Route path='/login' component={Login} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
