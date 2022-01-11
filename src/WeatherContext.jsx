import React, {createContext, useContext, useReducer} from "react";

const WeatherStateContext = createContext()

const WeatherDispatchContext = createContext()

const initialValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {}
}

const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const weatherCity = action.payload
        const newAllWeather = {...state.allWeather, ...weatherCity}
        return {...state, allWeather: newAllWeather}
      case 'SET_CHART_DATA':
        const chartData = action.payload
        const newChartData = {...state.allChartData, ...chartData}
        return {...state, allChartData: newChartData}
      case 'SET_FORECAST_ITEM_LIST':
        const forecast = action.payload
        const newForecast = {...state.allForecastItemList, ...forecast}
        return {...state, allForecastItemList: newForecast}
      default:
        return state
    }
  }
const WeatherContext = ({children}) => {
  const [weatherState, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={weatherState}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  )
}

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext)

  if (!dispatch){
    throw Error('Must set dispatch provider')
  }

  return dispatch
}

const useWeatherStateContext = () => {
  const state = useContext(WeatherStateContext)

  if (!state){
    throw Error('Must set state provider')
  }

  return state
}

export {
  WeatherContext,
  useWeatherDispatchContext,
  useWeatherStateContext
}