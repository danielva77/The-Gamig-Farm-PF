import Footer from './components/Footer/Footer';
import './App.css';
import LandingPage from './components/Landing Page/LandingPage';
import { Route, BrowserRouter } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;