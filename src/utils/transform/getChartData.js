import moment from "moment";
import {toCelsius} from "../utils";

const getChartData = (dataServer) => {
  const daysAhead = [0, 1, 2, 3, 4, 5]
  const days = daysAhead.map(d => moment().add(d, 'd'))

  return days.map(day => {
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
}

export default getChartData