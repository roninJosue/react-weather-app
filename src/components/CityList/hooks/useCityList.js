import {useState, useEffect} from "react"
import {getWeather} from "../../../config/api";
import getAllWeather from "../../../utils/transform/getAllWeather";
import {getCityCode} from "../../../utils/utils";



const useCityList = (cities, allWeather, actions) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      try {
        const propName = getCityCode(city, countryCode)

        const response = await getWeather(city, countryCode)
        const allWeatherAux = getAllWeather(response, city, countryCode)

        actions({
          type: 'SET_ALL_WEATHER',
          payload: {[propName]: {}}
        })

        actions({
          type: 'SET_ALL_WEATHER',
          payload: allWeatherAux
        })

      } catch (err) {
        if (err.response) {
          setError('Weather App error')
        } else if (err.request) {
          setError('Check your network connection')
        } else {
          setError('Problems to load the weather')
        }
      }
    }

    cities.forEach(({city, countryCode}) => {
      if (!allWeather[getCityCode(city, countryCode)]){
        setWeather(city, countryCode)
      }
    })
  }, [cities, actions, allWeather]);

  return {
    error,
    setError
  }
}

export default useCityList