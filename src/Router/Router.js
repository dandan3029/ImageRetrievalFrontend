import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PAGE_ID_TO_COMPONENT from './PAGE_ID_TO_COMPONENT';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from "../Config/ROUTE";
import Rooter from '../Components/Root';

const Routes = () => (
    <Router>
        <Rooter>
        <Switch>
          <Redirect exact from="/" to={PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVAL]} />
          <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]+'/:searchKey'}
                  component={PAGE_ID_TO_COMPONENT[PAGE_ID.RETRIEVALRESULT]}
                  key={PAGE_ID_TO_ROUTE[PAGE_ID.RETRIEVALRESULT]} />
          <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]+'/:imageId'}
                  component={PAGE_ID_TO_COMPONENT[PAGE_ID.IMAGEDETAIL]}
                  key={PAGE_ID_TO_ROUTE[PAGE_ID.IMAGEDETAIL]} />
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
