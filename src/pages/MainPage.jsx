import React from 'react';
import {useHistory} from "react-router-dom";
import CityList from "../components/CityList";

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
    <div>
      <h2>City List</h2>
      <CityList onClickCity={onClickHandler} cities={arrCities} />
    </div>
  );
};


export default MainPage;
