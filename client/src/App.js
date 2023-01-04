import Footer from "./components/Footer/Footer";
import './App.css';
import LandingPage from "./components//Landing Page/Landing Page";
import { Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
