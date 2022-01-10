import React, {useMemo} from 'react';
import WelcomeScreen from "../components/WelcomeScreen";
import {Grid, Typography, Link} from "@material-ui/core";
import {IconContext} from "react-icons";
import {WiDaySunny} from "react-icons/wi";
import {Link as LinkRouter} from 'react-router-dom'

const WelcomePage = () => {
  const iconContextSize = useMemo(() => ({size: '6em'}), [])

  return (
    <WelcomeScreen>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className="full"
      >
        <div className="highlight">
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny/>
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Weather App
              </Typography>
              <Link
                color="inherit"
                aria-label="menu"
                component={LinkRouter}
                to="/main"
              >
                Enter
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
