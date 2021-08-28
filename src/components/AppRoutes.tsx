import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ChampionShip from "../championship/ChampionShip"
import Home from "./pages/Home"
import Competitions from "./pages/competitions/Competitions"
import WorkshopPage from "./pages/workshops/WorkshopPage"
import Workshops from "./pages/workshops/Workshops"
import CompetitionPage from "./pages/competitions/CompetitionsPage"
import Events from "./pages/Events/Events"
import EventPage from "./pages/Events/EventPage"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />

            <Route exact path="/workshops">
                <Events type= "workshops" />
            </Route>

            <Route exact path="/competitions">
                <Events type= "competitions" />
            </Route>

            <Route exact path="/workshops/:id">
                <EventPage type= "workshops"/>
            </Route>

            <Route exact path="/competitions/:id">
                         <EventPage type= "competitions"/>
            </Route>
            <Route exact path="/championships" component={ChampionShip}/>
        </Router>
    )
}

export default AppRoutes
