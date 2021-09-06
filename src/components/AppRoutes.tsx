import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ChampionShip from "./pages/championship/ChampionShip"
import Home from "./pages/Home"
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
interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />

            <Route exact path="/workshops">
                <Events type= {EventType.Workshops} />
            </Route>
            {/* <Route exact path="/shows" component={ShowPage}></Route> */}
            <Route exact path="/competitions">
                <Events type= "COMPETITIONS" />
            </Route>
            <Route exact path="/shows" component={Shows}></Route>
            <Route exact path="/shows/:showid" component={ShowPage}>
                {/* <EventPage type="shows"></EventPage> */}
            </Route>
            
            <Route exact path="/competitions/:id">
                    <EventPage type= "competitions"/>
            </Route>
            <Route exact path="/workshops/:id">
                    <EventPage type= "workshops"/>
            </Route>
            <Route exact path="/championships" component={ChampionShip}/>
            {/* <Route exact path="/User/:profName" component={Profile}></Route> */}


            <Route exact path= "/helpdesk" component = {HelpDesk}></Route>
            <Route exact path="/contactus" component={Contactus}></Route>

            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/addevent" component={AddEvent}/>
            <Route exact path="/editevent/:id" component={EditEvent}/>
            <Route  path="/verifyuser/:token" component={Verify}></Route>

            <Route exact path="/forgot" component={Forgot}></Route>

            {/* <Route exact path="/event" component={Event}/> */}
        </Router>
    )
}

export default AppRoutes