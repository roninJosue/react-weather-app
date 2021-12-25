import React from 'react';
import PropTypes from 'prop-types';
import {Grid, List, ListItem} from '@material-ui/core'
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
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
          <Weather temperature={10} state='sunny'/>
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({cities, onClickCity}) => {
  return (
    <List>
      {
        cities.map((city) => renderCityAndCountry(onClickCity)(city))
      }
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  })),
  onClickCity: PropTypes.func.isRequired
};

export default CityList;
