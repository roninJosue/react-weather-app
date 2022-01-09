import {useEffect} from "react"
import {getForecast} from "../../config/api";
import {useParams} from "react-router-dom";
import getChartData from "../../utils/transform/getChartData";
import getForecastData from "../../utils/transform/getForecastData";
import {getCityCode} from "../../utils/utils";

const useCityPage = (allChartData, allForecastItemList, actions) => {

  const {city, countryCode} = useParams()
  const cityCode = getCityCode(city, countryCode)

  useEffect(() => {
    const forecast = async () => {
      try {
        const {data: dataServer} = await getForecast(city, countryCode)

        const dataAux = getChartData(dataServer)
        const forecastItemListAux = getForecastData(dataServer)

        actions({
          type: 'SET_CHART_DATA',
          payload: {[cityCode]: dataAux}
        })

        actions({
          type: 'SET_FORECAST_ITEM_LIST',
          payload: {[cityCode]: forecastItemListAux}
        })
      } catch (error) {
        console.log(error)
      }
    }

    if (allChartData &&
      allForecastItemList &&
      !allChartData[cityCode] &&
      !allForecastItemList[cityCode]) {
      forecast()
    }
  }, [city, countryCode, actions, allChartData, allForecastItemList]);

  return {
    city,
    countryCode
  }
}

export default useCityPage