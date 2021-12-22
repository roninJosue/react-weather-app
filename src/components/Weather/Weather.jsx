import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain
} from "react-icons/wi";
import {IconContext} from "react-icons"

const validStateName = [
  'cloud',
  'cloudy',
  'fog',
  'sunny',
  'rain'
]

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderState = state => {
  const WeatherIconComponent = stateByName[state] ?? WiDaySunny
  return <WeatherIconComponent/>
}

const Weather = ({temperature, state}) => {
  return (
    <>
      <IconContext.Provider value={{size: '5em'}}>
        {renderState(state)}
      </IconContext.Provider>
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
