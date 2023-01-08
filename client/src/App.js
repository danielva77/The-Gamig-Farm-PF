import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from './components/Details/Details';
import NavBar from './components/NavBar/NavBar';
import { LoginButton } from "./components/Login/Login";
import { LogoutButton } from "../src/components/Logout/Logout"
import { Profile } from "./components/Profile/profile"
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated } = useAuth0();


  return (
    <BrowserRouter>
    <div className="App">
    {isAuthenticated ? (
          <>
      <Profile/>
      <LogoutButton/>
      </>
        ) : (
      <LoginButton/>
      )}
      <NavBar/>
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/products/:id' component={Details} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
