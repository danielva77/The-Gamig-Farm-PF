import { Route, BrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"

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
