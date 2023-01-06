import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar.jsx"
import Details from './components/Details/Details';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route path='/home' component={NavBar} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/home/:id' component={Details} />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
