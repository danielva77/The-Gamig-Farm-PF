// import Footer from './components/Footer/Footer';
import "./App.css";
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import NavBar from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/profile";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contacto/Contact";

function App() {

  return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/products/:id" component={Details} />
        <Route path="/form" component={Form} />
        <Route path="/contacto" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>

    </div>
  )
}

export default App
