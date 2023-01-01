import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { lineData } from '../../../../data/config'

function LineChart() {
  return <Line data={lineData} width={600} height={200} />
}

export default LineChart
