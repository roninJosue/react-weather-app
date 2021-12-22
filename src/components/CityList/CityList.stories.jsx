import React from "react"
import CityList from "./CityList";

const arrCities = [
  {city: 'Leon', country: 'Nicaragua'},
  {city: 'Managua', country: 'Nicaragua'},
  {city: 'Chinandega', country: 'Nicaragua'},
  {city: 'Esteli', country: 'Nicaragua'},
  {city: 'Ocotal', country: 'Nicaragua'},
]

export default {
  title: 'CityList',
  component: CityList
}

export const CityListExample = () => (<CityList cities={arrCities}/>)