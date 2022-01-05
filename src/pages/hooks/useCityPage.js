import {useState, useEffect, useDebugValue} from "react"
import {getForecast} from "../../config/api";
import {useParams} from "react-router-dom";
import getChartData from "../../utils/transform/getChartData";
import getForecastData from "../../utils/transform/getForecastData";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const {city, countryCode} = useParams()

  useDebugValue(city)
  useDebugValue(chartData)

  useEffect(() => {
    const forecast = async () => {
      try {
        const {data: dataServer} = await getForecast(city, countryCode)

        const dataAux = getChartData(dataServer)
        const forecastItemListAux = getForecastData(dataServer)

        setChartData(dataAux)
        setForecastItemList(forecastItemListAux)
      } catch (error) {
        console.log(error)
      }
    }
    forecast()
  }, [city, countryCode]);

  return {
    chartData,
    forecastItemList,
    city,
    countryCode
  }
}

export default useCityPage