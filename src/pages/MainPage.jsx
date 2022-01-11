import React,{useCallback} from 'react';
import {useHistory} from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList";
import {Paper} from "@material-ui/core";
import {getCities} from "../services/cities";

const MainPage = () => {
  const history = useHistory()

  const onClickHandler = useCallback((city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`)
  }, [history])

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          onClickCity={onClickHandler}
          cities={getCities()}
        />
      </Paper>
    </AppFrame>
  );
};


export default MainPage;
