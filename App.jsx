import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginRegister from "./components/LoginRegister";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/" component={LoginRegister}/>
            </Switch>
        </Router>
    }
}

export default App;