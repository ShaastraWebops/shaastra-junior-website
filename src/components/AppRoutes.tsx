import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ChampionShip from "./pages/championship/ChampionShip"
import Home from "./pages/Home/Home"
import Events from "./pages/Events/Events"
import EventPage from "./pages/Events/EventPage"
import Shows from "./pages/shows/Shows"
import ShowPage from "./pages/shows/ShowsPage"
import Profile from "./pages/profile/Profile"
import Contactus from "./pages/contactus/Contact"
import SignIn from "./pages/signinUp/SignIn"
import SignUp from "./pages/signinUp/SignUp"
import HelpDesk from "./pages/helpdesk/HelpDesk"
import AddEvent from "./pages/Admin/AddEvent"
import EditEvent from "./pages/Admin/EditEvent"
import { EventType } from "../types/generated/generated"
import Verify from "./pages/signinUp/Verify"
import Forgot from "./pages/signinUp/Forgot"
import ForgotAfterLink from "./pages/signinUp/ForgotAfterLink"
import LogOut from "./pages/signinUp/LogOut"
import Edit from "./pages/profile/Edit"
import {useState, useEffect} from "react"
import EmailResend from "./pages/signinUp/EmailResend"
import Schedule from "./pages/Schedule/Schedule"
import sales from "./pages/sales/sales"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    
    return (
        <Router>
            <Route exact path="/" component={Home} />

            <Route exact path="/workshops">
                <Events type= "WORKSHOPS" />
            </Route>
            <Route exact path="/shows">
            <Events type= "SHOWS" />
            </Route>
            <Route exact path="/competitions">
                <Events type= "COMPETITIONS" />
            </Route>
            {/* <Route exact path="/shows" component={Shows}></Route> */}
            <Route exact path="/shows/:id" >
                <EventPage  />
            </Route>
            
            <Route exact path="/competitions/:id">
                    <EventPage />
            </Route>
            <Route exact path="/workshops/:id">
                    <EventPage />
            </Route>
            <Route exact path="/championships" component={ChampionShip}/>
            <Route exact path="/schedule" component={Schedule}/>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/editProfile" component={Edit}></Route>
            {/* <Route exact path="/editProfile" component={Edit}></Route> */}

            <Route exact path= "/helpdesk" component = {HelpDesk}></Route>
            <Route exact path="/contactus" component={Contactus}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/sales" component={sales}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/email-resend" component={EmailResend}></Route>
            <Route exact path="/addevent" component={AddEvent}/>
            <Route exact path="/editevent/:id" component={EditEvent}/>
            <Route exact path="/verifyuser/:token" component={Verify}>
            </Route>

            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/forgotpassword/:token" component={ForgotAfterLink}></Route>

            <Route exact path="/logout" component={LogOut}></Route>

        </Router>
    )
}

export default AppRoutes