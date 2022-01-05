import {useState, useEffect} from "react"
import {getForecast} from "../../config/api";
import moment from "moment";
import {useParams} from "react-router-dom";
import {toCelsius} from "../../utils/utils";

const useCityPage = () => {
  const [chartData, setChartData] = useState([]);
  const [forecastItemList, setForecastItemList] = useState([]);
  const {city, countryCode} = useParams()

  useEffect(() => {
    const forecast = async () => {
      try {
        const {data: dataServer} = await getForecast(city, countryCode)

        const daysAhead = [0, 1, 2, 3, 4, 5]
        const days = daysAhead.map(d => moment().add(d, 'd'))

        const dataAux = days.map(day => {
          const tempObjArray = dataServer.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
          })

          const temps = tempObjArray.map(item => item.main.temp)

          return ({
            dayHour: day.format('ddd'),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
            hasTemps: temps.length > 0
          })
        }).filter(item => item.hasTemps)

        const interval = [4, 8, 12, 16, 20, 24]
        const forecastItemListAux = dataServer.list
          .filter((item, index) => interval.includes(index))
          .map(item => {
            return ({
              hour: moment.unix(item.dt).hour(),
              weekDay: moment.unix(item.dt).format('dddd'),
              state: item.weather[0].main.toLowerCase(),
              temperature: toCelsius(item.main.temp)
            })
          })
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