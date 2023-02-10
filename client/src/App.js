// import Footer from './components/Footer/Footer';
import "./App.css"
import LandingPage from "./components//Landing Page/LandingPage"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Home from "./components/Home/Home"
import Details from "./components/Details/Details"
import NavBar from "./components/NavBar/NavBar"
// import { LoginButton } from "./components/Login/Login";
// import { LogoutButton } from "../src/components/Logout/Logout"
import { Profile } from "./components/Profile/profile"
import { useAuth0 } from "@auth0/auth0-react"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import LandingPageAd from "./components/Admin/LandingPageAd"
import UserProfile from "./components/PanelProfile/UserProfile/UserProfile"
import EditUserProfile from "./components/PanelProfile/UserProfile/EditUserProfile"
import Contact from "./components/Contacto/Contact"
import Confirmation from "./components/Confirmation/Confirmation"
import ModifyProducts from "./components/Form/ModifyProducts"

import Sidebar from "./admin/scenes/global/Sidebar"
import Dashboard from "./admin/scenes/dashboard"
import Products from "./admin/scenes/products"
import Contacts from "./admin/scenes/contacts"
import FormAdmin from "./admin/scenes/form"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./admin/theme"
import { useState } from "react"
import Users from "./admin/scenes/users"
import { useSelector } from "react-redux"

function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Switch>
            <Route exact path="/navbar" component={NavBar} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/products/:id" component={Details} />
            <Route path="/contacto" component={Contact} />
            <Route path="/confirmation/approve" component={Confirmation} />
            <Route path="/about" component={About} />
            <Route path="/myProfile/:id" component={UserProfile} />
            <Route path="/editProfile/:id" component={EditUserProfile} />
            <Route path="/editproduct/:id" component={ModifyProducts} />
            {/* <Route path='/Footer' component={Footer} /> */}

            {/* Admin */}
            <Route exact path="/admin" component={Sidebar} />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/users" component={Users} />
            {/* <Route path="/admin/contacts" component={Contacts} /> */}
            <Route path="/admin/form" component={Form} />
          </Switch>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
