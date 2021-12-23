import React from "react"
import ForecastItem from "./ForecastItem";

export default {
  title: 'Fore Cast Item',
  component: ForecastItem
}

export const SunnyMondayExample = () => <ForecastItem weekDay='Monday' temperature={23} hour={3} state='sunny' />