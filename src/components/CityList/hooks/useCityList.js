import {useState, useEffect} from "react"
import {getWeather} from "../../../config/api";
import {getCityCode, toCelsius} from "../../../utils/utils";



const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      try {
        const response = await getWeather(city, countryCode)
        const {data} = response
        const temperature = toCelsius(data.main.temp)
        const state = data.weather[0].main.toLowerCase()
        const propName = getCityCode(city, countryCode)
        const propValue = {temperature, state}
        setAllWeather(all => ({...all, [propName]: propValue}))
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

    cities.forEach(({city, countryCode}) => setWeather(city, countryCode))
  }, [cities]);

  return {
    allWeather,
    error,
    setError
  }
}

export default useCityList