const cities = [
  {city: 'Leon', country: 'Nicaragua', countryCode: 'NI'},
/*  {city: 'Managua', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Chinandega', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Esteli', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Ocotal', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Jinotega', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Madrid', country: 'España', countryCode: 'ES'},
  {city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'},*/
]

export const getCities = () => cities

export const getCountryNameByCountryCode = (countryCode) => {
  return cities.filter(city => city.countryCode === countryCode)[0].country
}