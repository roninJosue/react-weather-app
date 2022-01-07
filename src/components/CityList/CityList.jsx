import React from 'react';
import PropTypes from 'prop-types';
import {Grid, List, ListItem} from '@material-ui/core'
import {Alert} from "@material-ui/lab";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import useCityList from "./hooks/useCityList";
import {getCityCode} from "../../utils/utils";

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const {city, country, countryCode} = cityAndCountry

  return (
    <ListItem
      button
      key={getCityCode(city, countryCode)}
      onClick={() => eventOnClickCity(city, countryCode)}
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

const CityList = ({cities, onClickCity, onSetAllWeather, allWeather}) => {

  const {
    error,
    setError
  } = useCityList(cities, allWeather, onSetAllWeather)

  return (
    <>
      {
        error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
      }
      <List>
        {
          cities.map((city) => {
            return renderCityAndCountry(onClickCity)(city, allWeather[getCityCode(city.city, city.countryCode)])
          })
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
