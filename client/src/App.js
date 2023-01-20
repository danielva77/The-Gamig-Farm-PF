// import Footer from './components/Footer/Footer';
import "./App.css"
import LandingPage from "./components//Landing Page/LandingPage"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from "./components/Details/Details"
import Form from "./components/Form/Form"
import About from "./components/About/About"
import Contact from "./components/Contacto/Contact"
import Confirmation from "./components/Confirmation/Confirmation"

import Sidebar from "./admin/scenes/global/Sidebar"
import Dashboard from "./admin/scenes/dashboard"
import Products from "./admin/scenes/products"
import Contacts from "./admin/scenes/contacts"
import FormAdmin from "./admin/scenes/form"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./admin/theme"
import { useState } from "react"
import AdminApp from "./AdminApp"

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Route path="/admin" component={Sidebar} />

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/products/:id" component={Details} />
            <Route path="/form" component={Form} />
            <Route path="/contacto" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/confirmation/approve" component={Confirmation} />

            {/* Admin */}

            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/contacts" component={Contacts} />
            <Route path="/admin/form" component={FormAdmin} />

            {/* <Route path='/Footer' component={Footer} /> */}
          </Switch>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
