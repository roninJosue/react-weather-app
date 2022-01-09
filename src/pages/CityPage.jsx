import React, {useMemo} from 'react';
import {Grid, LinearProgress} from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";
import AppFrame from "../components/AppFrame";
import useCityPage from "./hooks/useCityPage";
import useCityList from "../components/CityList/hooks/useCityList";
import {getCityCode} from "../utils/utils";
import {getCountryNameByCountryCode} from "../services/cities";

const CityPage = ({data, actions}) => {


  const {
    allWeather,
    allChartData,
    allForecastItemList
  } = data

  const {
    city,
    countryCode
  } = useCityPage(
    allChartData,
    allForecastItemList,
    actions
  )

  const cities = useMemo(() => ([{city, countryCode}]), [city, countryCode]);

  useCityList(cities, allWeather, actions)

  const cityCode = getCityCode(city, countryCode)
  const chartData = allChartData[cityCode]
  const forecastItemList = allForecastItemList[cityCode]

  const weather = allWeather[cityCode]
  const country = getCountryNameByCountryCode(countryCode)
  const state = weather && weather.state
  const temperature = weather && weather.temperature
  const wind = weather && weather.wind
  const humidity = weather && weather.humidity

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
          <Weather
            temperature={temperature}
            state={state}
          />
          {humidity && wind && (
            <WeatherDetails
              wind={wind}
              humidity={humidity}
            />
          )}
          <Grid item xs={12}>
            {!chartData && !forecastItemList && <LinearProgress/>}
          </Grid>
          <Grid item xs={12}>
            {chartData && (<ForecastChart data={chartData}/>)}
          </Grid>
          <Grid item xs={12}>
            {forecastItemList && (<Forecast forecastItemList={forecastItemList}/>)}
          </Grid>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
