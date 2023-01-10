import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from './components/Details/Details';
import About from './components/About/About';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/products/:id' component={Details} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
