import React from 'react';
import {useHistory} from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList";
import {Paper} from "@material-ui/core";

const arrCities = [
  {city: 'Leon', country: 'Nicaragua'},
  {city: 'Managua', country: 'Nicaragua'},
  {city: 'Chinandega', country: 'Nicaragua'},
  {city: 'Esteli', country: 'Nicaragua'},
  {city: 'Ocotal', country: 'Nicaragua'},
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
