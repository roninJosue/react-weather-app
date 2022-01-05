import React from 'react';
import {Grid} from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";
import AppFrame from "../components/AppFrame";
import useCityPage from "./hooks/useCityPage";

const CityPage = () => {
  const {
    chartData,
    forecastItemList,
    city
  } = useCityPage()

  const country = 'Nicaragua'
  const state = 'rain'
  const temperature = 13
  const wind = 22
  const humidity = 11

  return (
    <AppFrame>
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
            {chartData && <ForecastChart data={chartData}/>}
          </Grid>
          <Grid item xs={12}>
            {forecastItemList && <Forecast forecastItemList={forecastItemList}/>}
          </Grid>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
