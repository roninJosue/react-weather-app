import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import convertUnits from 'convert-units'
import {Grid, List, ListItem} from '@material-ui/core'
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const {city, country} = cityAndCountry

  return (
    <ListItem
      button
      key={city}
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

  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appId = process.env.REACT_APP_OPEN_WEATHER_APP_ID
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`
      axios
        .get(url)
        .then(({data, status}) => {
          const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
          const state = data.weather[0].main.toLowerCase()
          const propName = `${city}-${country}`
          const propValue = {temperature, state}
          //setAllWeather({...allWeather, [propName]: propValue})
          setAllWeather(all => ({...all, [propName]: propValue}))
        })
    }

    cities.forEach(({city, country, countryCode}) => setWeather(city, country, countryCode))
  }, [cities]);

  return (
    <List>
      {
        cities.map((city) => renderCityAndCountry(onClickCity)(city, allWeather[`${city.city}-${city.country}`]))
      }
    </List>
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
