import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import IconState from "../IconState/IconState";
import {validStateName} from "../IconState/hooks/useWeatherIcon";
import {Grid} from "@material-ui/core";

const Weather = ({temperature, state}) => {
  return (
    <Grid
      container
      item
      direction='row'
      alignItems='center'
      justifyContent='center'
      spacing={1}
    >
      <IconState size={'6em'} state={state} />
      <Typography
        display='inline'
        variant='h2'
      >
        {temperature}
      </Typography>
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validStateName).isRequired
};

export default Weather;
