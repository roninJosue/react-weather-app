import React, {useState, useEffect} from 'react';
import moment from "moment";
//import 'moment/locale/es'
import {Grid} from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart";
import AppFrame from "../components/AppFrame";
import {useParams} from "react-router-dom";
import {getForecast} from "../config/api";
import convertUnits from "convert-units";

const CityPage = () => {
  const [data, setData] = useState([]);
  const [forecastItemList, setForecastItemList] = useState([]);
  const {city, countryCode} = useParams()
  const country = 'Nicaragua'
  const state = 'rain'
  const temperature = 13
  const wind = 22
  const humidity = 11

  useEffect(() => {
    const forecast = async () => {
      try {
        const {data: dataServer} = await getForecast(city, countryCode)
        const toCelsius = temp => Number(convertUnits(temp).from('K').to('C').toFixed(0))
        const daysAhead = [0, 1, 2, 3, 4, 5]
        const days = daysAhead.map(d => moment().add(d, 'd'))
        const dataAux = days.map(day => {
          const tempObjArray = dataServer.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
          })

          const temps = tempObjArray.map(item => item.main.temp)
          return ({
            dayHour: day.format('ddd'),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps))
          })
        })

        const interval = [4, 8, 12, 16, 20, 24]
        const forecastItemListAux = dataServer.list
          .filter((item, index) => interval.includes(index))
          .map(item => {
            return ({
              hour: moment.unix(item.dt).hour(),
              weekDay: moment.unix(item.dt).format('dddd'),
              state: item.weather[0].main.toLowerCase(),
              temperature: toCelsius(item.main.temp)
            })
          })
        setData(dataAux)
        setForecastItemList(forecastItemListAux)
      } catch (error) {
        console.log(error)
      }
    }
    forecast()
  }, [city, countryCode]);


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
            {data && <ForecastChart data={data}/>}
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
