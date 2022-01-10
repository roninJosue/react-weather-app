import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";

const ForecastChart = ({data}) => {
  const marginSize = useMemo(() => ({top: 20, bottom: 20, left: 5, right: 5}), []);

  return (
    <ResponsiveContainer
      height={250}
      width='95%'
    >
      <LineChart
        margin={marginSize}
        data={data}
      >
        <XAxis dataKey='dayHour' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='max' stroke='#ff0000'/>
        <Line type='monotone' dataKey='min' stroke='#0000ff'/>
      </LineChart>
    </ResponsiveContainer>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  )
};

export default ForecastChart;
