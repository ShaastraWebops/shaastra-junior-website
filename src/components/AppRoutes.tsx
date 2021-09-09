import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ChampionShip from "./pages/championship/ChampionShip"
import Home from "./pages/Home"
import Competitions from "./pages/competitions/Competitions"
import WorkshopPage from "./pages/workshops/WorkshopPage"
import Workshops from "./pages/workshops/Workshops"
import CompetitionPage from "./pages/competitions/CompetitionsPage"
import Events from "./pages/Events/Events"
import EventPage from "./pages/Events/EventPage"
import Shows from "./pages/shows/Shows"
import ShowPage from "./pages/shows/ShowsPage"
import Profile from "./pages/profile/Profile"
import Contactus from "./pages/contactus/Contact"
import SignIn from "./pages/signinUp/SignIn"
import SignUp from "./pages/signinUp/SignUp"
import HelpDesk from "./pages/helpdesk/HelpDesk"
import Event from "./pages/Admin/Event"
import Verify from "./pages/signinUp/Verify"
import Forgot from "./pages/signinUp/Forgot"
import ForgotAfterLink from "./pages/signinUp/ForgotAfterLink"
import LogOut from "./pages/signinUp/LogOut"
import Edit from "./pages/profile/Edit"
import {useState, useEffect} from "react"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/workshops"><Events type= "workshops" /></Route>
            <Route exact path="/competitions"><Events type= "competitions" /></Route>
            <Route exact path="/shows" component={Shows}></Route>
            <Route exact path="/shows/:showid" component={ShowPage}></Route>
            <Route exact path="/competitions/:id"><EventPage type= "competitions"/></Route>
            <Route exact path="/championships" component={ChampionShip}/>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/editProfile" component={Edit}></Route>
            {/* <Route exact path="/editProfile" component={Edit}></Route> */}

            <Route exact path= "/helpdesk" component = {HelpDesk}></Route>
            <Route exact path="/contactus" component={Contactus}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/verifyuser/:token" component={Verify}>
                {/* <Redirect from=""></Redirect> */}
            </Route>

            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/forgotpassword/:token" component={ForgotAfterLink}></Route>

            <Route exact path="/logout" component={LogOut}></Route>

            <Route exact path="/event" component={Event}/>
        </Router>
    )
}

export default AppRoutes