import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {IconContext} from "react-icons"
import useWeatherIcon, {validStateName} from "./hooks/useWeatherIcon";

const IconState = ({state, size}) => {
  const {renderState} = useWeatherIcon(state)
  const sizeMemo = useMemo(() => ({size}), [size]);

  return (
    <IconContext.Provider value={sizeMemo}>
      {renderState()}
    </IconContext.Provider>
  );
};

IconState.propTypes = {
  state: PropTypes.oneOf(validStateName).isRequired,
  size: PropTypes.string.isRequired
};

export default IconState;
