import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import convertUnits from 'convert-units'
import {Grid, List, ListItem} from '@material-ui/core'
import {Alert} from "@material-ui/lab";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const {city, country, countryCode} = cityAndCountry

  return (
    <ListItem
      button
      key={getCityCode(city, countryCode)}
      onClick={eventOnClickCity}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          md={8}
          xs={12}
        >
          <CityInfo city={city} country={country}/>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
        >
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          />
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({cities, onClickCity}) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const appId = process.env.REACT_APP_OPEN_WEATHER_APP_ID
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`

      try {
        const response = await axios.get(url)
        const {data} = response
        const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
        const state = data.weather[0].main.toLowerCase()
        const propName = getCityCode(city, countryCode)
        const propValue = {temperature, state}
        setAllWeather(all => ({...all, [propName]: propValue}))
      } catch (err) {
        if (err.response) {
          setError('Weather App error')
        } else if (err.request) {
          setError('Check your network connection')
        } else {
          setError('Problems to load the weather')
        }
      }
    }

    cities.forEach(({city, countryCode}) => setWeather(city, countryCode))
  }, [cities]);

  return (
    <>
      {
        error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
      }
      <List>
        {
          cities.map((city) => renderCityAndCountry(onClickCity)(city, allWeather[getCityCode(city.city, city.countryCode)]))
        }
      </List>
    </>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired
  })).isRequired,
  onClickCity: PropTypes.func.isRequired
};

export default CityList;
