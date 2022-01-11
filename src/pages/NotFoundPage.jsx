import React from 'react';
import {Link as LinkRouter} from "react-router-dom";
import {Grid, Typography, Link} from "@material-ui/core";
import {IconContext} from "react-icons";
import {WiRain} from "react-icons/wi";

const NotFoundPage = () => {
  return (
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
            <IconContext.Provider value={{size: "6em"}}>
              <WiRain />
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
              404 | Page not found
            </Typography>
            <Link
              color="inherit"
              aria-label="menu"
              component={LinkRouter}
              to="/main"
            >
              Go to main
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
