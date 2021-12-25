import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import CityList from "./CityList";

const arrCities = [
  {city: 'Leon', country: 'Nicaragua'},
  {city: 'Managua', country: 'Nicaragua'},
  {city: 'Chinandega', country: 'Nicaragua'},
]

test('City List render', async () => {

  render(<CityList cities={arrCities} onClickCity={() => {}} />)

  const list = await screen.findAllByRole('button')

  expect(list).toHaveLength(arrCities.length)
})

test('City List click on item', async () => {
  const onClick = jest.fn()
  render(<CityList cities={arrCities} onClickCity={onClick} />)


  const items = await screen.findAllByRole('button')

  fireEvent.click(items[0])
  expect(onClick).toHaveBeenCalledTimes(1)
})
