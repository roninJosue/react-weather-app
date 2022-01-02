import React from 'react';
import {useHistory} from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList";
import {Paper} from "@material-ui/core";

const arrCities = [
  {city: 'Leon', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Managua', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Chinandega', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Esteli', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Ocotal', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Jinotega', country: 'Nicaragua', countryCode: 'NI'},
]

const MainPage = () => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/city')
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          onClickCity={onClickHandler}
          cities={arrCities}
        />
      </Paper>
    </AppFrame>
  );
};


export default MainPage;
