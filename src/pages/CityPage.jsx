import React from 'react';
import {Grid} from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";

const CityPage = () => {
  const city = 'León'
  const country = 'Nicaragua'
  const state = 'rain'
  const temperature = 13
  const wind = 22
  const humidity = 11
  const data = [
    {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
    },
    {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
    },
    {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
    },
    {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
    },
    {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
    },
    {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
    }
  ]
  const forecastItemList = [
    {hour: 3, state: 'sunny', temperature: 33, weekDay: 'Monday'},
    {hour: 8, state: 'rain', temperature: 23, weekDay: 'Monday'},
    {hour: 10, state: 'fog', temperature: 33, weekDay: 'Monday'},
    {hour: 10, state: 'fog', temperature: 33, weekDay: 'Friday'},
  ]

  return (
    <Grid
      container
      justifyContent='space-around'
      direction='column'
      spacing={2}
    >
      <Grid
        item
        container
        justifyContent='center'
        alignItems='flex-end'
        xs={12}
      >
        <CityInfo city={city} country={country}/>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent='center'
      >
        <Weather temperature={temperature} state={state}/>
        <WeatherDetails wind={wind} humidity={humidity}/>
        <Grid item xs={12}>
          <ForecastChart data={data}/>
        </Grid>
        <Grid item xs={12}>
          <Forecast forecastItemList={forecastItemList}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CityPage;
