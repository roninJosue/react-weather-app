import React from "react"
import AppFrame from "./AppFrame";
import {BrowserRouter as Router} from "react-router-dom";

export default {
  title: 'App Frame',
  component: AppFrame
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      <h1>Adadsadsa</h1>
    </AppFrame>
  </Router>
)