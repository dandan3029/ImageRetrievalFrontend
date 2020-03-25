import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PAGE_ID_TO_COMPONENT from './PAGE_ID_TO_COMPONENT';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from "../Config/ROUTE";
import Rooter from '../Components/Root';

const Routes = () => (
    <Router>
        <Rooter>
        <Switch>
          {
            Object.values(PAGE_ID).map(PAGE_ID => <Route  path={PAGE_ID_TO_ROUTE[PAGE_ID]}
                                                          component={PAGE_ID_TO_COMPONENT[PAGE_ID]}
                                                          key={PAGE_ID_TO_ROUTE[PAGE_ID]} />)
          }
        </Switch>
        </Rooter>
    </Router>
)

export default Routes;
