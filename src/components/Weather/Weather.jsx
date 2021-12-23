import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import IconState from "../IconState/IconState";
import {validStateName} from "../IconState/hooks/useWeatherIcon";

const Weather = ({temperature, state}) => {
  return (
    <>
      <IconState size={'5em'} state={state} />
      <Typography
        display='inline'
        variant='h2'
      >
        {temperature}
      </Typography>
    </>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validStateName).isRequired
};

export default Weather;
