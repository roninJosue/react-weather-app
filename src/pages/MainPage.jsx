import React,{useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "../components/CityList";
import {Paper} from "@material-ui/core";
import {getCities} from "../services/cities";

const MainPage = () => {
  const navigate = useNavigate()

  const onClickHandler = useCallback((city, countryCode) => {
    navigate(`/city/${countryCode}/${city}`)
  }, [navigate])

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
