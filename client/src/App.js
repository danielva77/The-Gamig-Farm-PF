import { Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Detail from "./components/Detail/Detail"
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home"
import Paginated from "./components/Paginated/Paginated"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/home' component={Home} />
    </div>
    </BrowserRouter>
  );
}

export default App;
