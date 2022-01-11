import React from "react"
import Weather from "./Weather";

export default {
  title: 'Weather',
  component: Weather
}

const Template = (args) => <Weather {...args} />

export const WeatherSunny = Template.bind({})
WeatherSunny.args = {temperature: 10, state: 'clear'}

export const WeatherRain = Template.bind({})
WeatherRain.args = {temperature: 1080, state: 'rain'}
