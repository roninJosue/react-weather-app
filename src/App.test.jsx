import React from "react"
import {Router} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import {createMemoryHistory} from "history"
import CityPage from "./pages/CityPage";

describe('App test', () => {
  it('should match /city route and render CityPage', async () => {
    const history = createMemoryHistory()
    history.push('/city')

    render(
      <Router history={history}>
        <CityPage/>
      </Router>
    )

    const title = await screen.findByText('Nicaragua')

    expect(title.tagName.toLowerCase()).toEqual('h6')

  });
})