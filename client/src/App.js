// import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from "./components//Landing Page/LandingPage";
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from './components/Details/Details';
import NavBar from './components/NavBar/NavBar';
// import { LoginButton } from "./components/Login/Login";
// import { LogoutButton } from "../src/components/Logout/Logout"
import { Profile } from "./components/Profile/profile"
import { useAuth0 } from "@auth0/auth0-react";
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"


function App() {
  // const { isAuthenticated } = useAuth0();


  return (
    <BrowserRouter>
    <div className="App">
    {/* {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
      <LoginButton/>
      )} */}
      <NavBar/>
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/products/:id' component={Details} />
      <Route  path='/form' component={Form} />
      <Route  path='/contacto' component={Contact} />
      <Route  path='/about' component={About} />

      {/* <Route path='/Footer' component={Footer} /> */}

      </Switch>

      {/* <Footer className="amdr"/> */}
      {/* Descomentar 'Footer' cuando tengamos más componentes en el home */}
      
    </div>
    </BrowserRouter>
  )
}

export default App
