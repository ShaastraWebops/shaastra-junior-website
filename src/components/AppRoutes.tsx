import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    )
}

export default AppRoutes
