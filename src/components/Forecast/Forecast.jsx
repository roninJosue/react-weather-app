import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from "@material-ui/core";
import ForecastItem from "../ForecastItem";

const renderForecast = ({hour, temperature, weekDay, state}) => {
  return (
    <Grid
      item
      key={`${weekDay}${hour}`}
      data-testid="forecast-item-container"
    >
      <ForecastItem
        weekDay={weekDay}
        temperature={temperature}
        hour={hour} state={state}
      />
    </Grid>
  )
}

const Forecast = ({forecastItemList}) => {
  return (
    <Grid
      container
      justifyContent='space-around'
      alignItems='center'
    >
      {
        forecastItemList.map(forecast => renderForecast(forecast))
      }
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(PropTypes.shape({
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
  }))
};

export default Forecast;
