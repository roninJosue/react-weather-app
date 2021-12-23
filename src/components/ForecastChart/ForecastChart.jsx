import React from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";

const ForecastChart = ({data}) => {
  return (
    <div>
      <LineChart
        height={250}
        width={700}
        margin={{top: 20, bottom: 20, left: 5, right: 5}}
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
    </div>
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
