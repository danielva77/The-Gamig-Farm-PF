import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from './components/Details/Details';
import {LoginButton} from './components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LoginButton/>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/products/:id' component={Details} />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
