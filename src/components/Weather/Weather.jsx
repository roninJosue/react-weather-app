import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {Skeleton} from "@material-ui/lab";
import IconState from "../IconState/IconState";
import {validStateName} from "../IconState/hooks/useWeatherIcon";
import {Grid} from "@material-ui/core";

const Weather = ({temperature, state}) => {
  return (
    <Grid
      container
      item
      direction='row'
      alignItems='center'
      justifyContent='center'
      spacing={1}
    >
      {
        state
          ? <IconState size={'6em'} state={state} />
          : <Skeleton variant='circle' height={80} width={80}></Skeleton>
      }
      {
        temperature
        ? (
            <Typography
              display='inline'
              variant='h2'
            >
              {temperature}
            </Typography>
          )
          : <Skeleton variant='text' height={80} width={80}></Skeleton>

      }
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number,
  state: PropTypes.oneOf(validStateName)
};

export default Weather;
