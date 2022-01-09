import React, {useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const weatherCity = action.payload
        const newAllWeather =  {...state.allWeather, ...weatherCity}
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

  const [weatherState, dispatch] = useReducer(reducer, initialValue);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomePage/>
        </Route>
        <Route path='/main'>
          <MainPage
            actions={dispatch}
            data={weatherState}
          />
        </Route>
        <Route path='/city/:countryCode/:city'>
          <CityPage
            data={weatherState}
            actions={dispatch}
          />
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
