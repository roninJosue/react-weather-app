import {useState, useEffect} from "react"
import {getWeather} from "../../../config/api";
import getAllWeather from "../../../utils/transform/getAllWeather";



const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      try {
        const response = await getWeather(city, countryCode)
        const allWeatherAux = getAllWeather(response, city, countryCode)
        setAllWeather(all => ({...all, ...allWeatherAux}))
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