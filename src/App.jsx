import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";
import {Grid} from "@material-ui/core";

const App = () => {
  return (
    <Grid
      container
      justifyContent='center'
      direction='row'
    >
      <Grid
        item
        xs={12}
        sm={11}
        md={10}
        lg={8}
      >
        <Router>
          <Switch>
            <Route exact path='/'>
              <WelcomePage />
            </Route>
            <Route path='/main'>
              <MainPage />
            </Route>
            <Route path='/city'>
              <CityPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
};

export default App;
