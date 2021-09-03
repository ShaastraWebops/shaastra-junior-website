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
import SignIn from "./../components/pages/signinUp/SignIn"
import SignUp from "./../components/pages/signinUp/SignUp"
interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />

            <Route exact path="/workshops">
                <Events type= "workshops" />
            </Route>
            {/* <Route exact path="/shows" component={ShowPage}></Route> */}
            <Route exact path="/competitions">
                <Events type= "competitions" />
            </Route>
            <Route exact path="/shows" component={Shows}></Route>
            <Route exact path="/workshops/:id">
                <EventPage type= "workshops"/>
            </Route>
            <Route exact path="/shows/:showid" component={ShowPage}></Route>
            <Route exact path="/competitions/:id">
                    <EventPage type= "competitions"/>
            </Route>
            <Route exact path="/championships" component={ChampionShip}/>
            <Route exact path="/profile/:profId" component={Profile}></Route>
            <Route exact path="/contactus" component={Contactus}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
        </Router>
    )
}

export default AppRoutes
