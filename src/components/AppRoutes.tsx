import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ChampionShip from "../championship/ChampionShip"
import Competitions from "./pages/competitions/Competitions"
import Home from "./pages/Home"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/competitions" component={Competitions} />
            <Route exact path="/championships" component={ChampionShip}/>
        </Router>
    )
}

export default AppRoutes
