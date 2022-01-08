import {useEffect} from "react"
import {getForecast} from "../../config/api";
import {useParams} from "react-router-dom";
import getChartData from "../../utils/transform/getChartData";
import getForecastData from "../../utils/transform/getForecastData";
import {getCityCode} from "../../utils/utils";

const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {

  const {city, countryCode} = useParams()

  useEffect(() => {
    const forecast = async () => {
      const cityCode = getCityCode(city, countryCode)
      try {
        const {data: dataServer} = await getForecast(city, countryCode)

        const dataAux = getChartData(dataServer)
        const forecastItemListAux = getForecastData(dataServer)

        onSetChartData({[cityCode]: dataAux})
        onSetForecastItemList({[cityCode]: forecastItemListAux})
      } catch (error) {
        console.log(error)
      }
    }

    const cityCode = getCityCode(city, countryCode)

    if (allChartData &&
      allForecastItemList &&
      !allChartData[cityCode] &&
      !allForecastItemList[cityCode]) {
      forecast()
    }
  }, [city, countryCode, onSetChartData, onSetForecastItemList, allChartData, allForecastItemList]);

  return {
    city,
    countryCode
  }
}

export default useCityPage