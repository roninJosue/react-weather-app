import React from 'react';
import PropTypes from 'prop-types';
import {IconContext} from "react-icons"
import useWeatherIcon, {validStateName} from "./hooks/useWeatherIcon";

const IconState = ({state, size}) => {
  const {renderState} = useWeatherIcon(state)

  return (
    <IconContext.Provider value={{size}}>
      {renderState()}
    </IconContext.Provider>
  );
};

IconState.propTypes = {
  state: PropTypes.oneOf(validStateName).isRequired,
  size: PropTypes.string.isRequired
};

export default IconState;
