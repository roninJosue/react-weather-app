import React, {useCallback, useMemo, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [allWeather, setAllWeather] = useState({})
  const [allChartData, setAllChartData] = useState({});
  const [allForecastItemList, setAllForecastItemList] = useState({});

  const onSetAllWeather = useCallback((weatherCity) => {
    setAllWeather(all => {
      return ({...all, ...weatherCity})
    })
  }, [setAllWeather])

  const onSetChartData = useCallback((charDataCity) => {
    setAllChartData(char => ({...char, ...charDataCity}))
  }, [setAllChartData])

  const onSetForecastItemList = useCallback((forecast) => {
    setAllForecastItemList(fore => ({...fore, ...forecast}))
  }, [setAllForecastItemList])

  const actions = useMemo(() => (
    {
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList
    }
  ), [onSetAllWeather]);

  const data = useMemo(() => (
    {
      allWeather,
      allChartData,
      allForecastItemList
    }
  ), [allWeather, allChartData, allForecastItemList]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomePage/>
        </Route>
        <Route path='/main'>
          <MainPage
            actions={actions}
            data={data}
          />
        </Route>
        <Route path='/city/:countryCode/:city'>
          <CityPage
            data={data}
            actions={actions}
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
