import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid} from "@material-ui/core";
import IconState from "../IconState/IconState";

const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconState size={'5em'} state={state} />
      </Grid>
      <Grid item>
        <Typography>{temperature} °</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
};

export default ForecastItem;
