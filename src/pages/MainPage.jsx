import React from 'react';
import {useHistory} from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList";
import {Paper} from "@material-ui/core";
import {getCities} from "../services/cities";

const MainPage = ({onSetAllWeather, allWeather}) => {
  const history = useHistory()

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`)
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          onClickCity={onClickHandler}
          cities={getCities()}
          onSetAllWeather={onSetAllWeather}
          allWeather={allWeather}
        />
      </Paper>
    </AppFrame>
  );
};


export default MainPage;
