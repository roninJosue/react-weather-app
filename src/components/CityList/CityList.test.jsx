import React from "react";
import {render, screen, fireEvent, act} from "@testing-library/react";
import CityList from "./CityList";

const arrCities = [
  {city: 'Leon', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Managua', country: 'Nicaragua', countryCode: 'NI'},
  {city: 'Chinandega', country: 'Nicaragua', countryCode: 'NI'},
]

test('City List render', async () => {

  act(() => {
    render(<CityList cities={arrCities} onClickCity={() => {}} />)
  })

  const list = await screen.findAllByRole('button')

  expect(list).toHaveLength(arrCities.length)
})

test('City List click on item', async () => {
  const onClick = jest.fn()

  act(() => {
    render(<CityList cities={arrCities} onClickCity={onClick} />)
  })


  const items = await screen.findAllByRole('button')

  fireEvent.click(items[0])
  expect(onClick).toHaveBeenCalledTimes(1)
})
