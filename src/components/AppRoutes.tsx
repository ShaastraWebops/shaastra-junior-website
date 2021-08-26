import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Competitions from "./pages/competitions/Competitions"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Contactus from "./../contactus/Contactus"
import SignIn from "./../components/pages/signinUp/SignIn"
interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/competitions" component={Competitions} />
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/contactus" component={Contactus}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
        </Router>
    )
}

export default AppRoutes
