import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { lineData } from '../../../../data/config'

function LineChart() {
  return <Line data={lineData} width={400} height={400} />
}

export default LineChart
