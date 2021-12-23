import React from "react"
import CityList from "./CityList";
import {action} from "@storybook/addon-actions"

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

export const CityListExample = () => (<CityList cities={arrCities} onClickCity={action('Click en la ciudad')}/>)