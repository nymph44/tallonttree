import React from 'react'

import { Chart } from 'react-google-charts'

const columns = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'string', label: 'Resource' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
]

const rows = [
  ['toTrain', 'Basic greetings', 'walk', null, null, 5 * 60 * 1000, 100, null],
  ['music', 'Subject pronouns', 'music', null, null, 70 * 60 * 1000, 100, null],
  [
    'wait',
    'Asking questions',
    'wait',
    null,
    null,
    10 * 60 * 1000,
    100,
    'toTrain',
  ],
  [
    'train',
    'Sentence structure',
    'train',
    null,
    null,
    45 * 60 * 1000,
    75,
    'wait',
  ],
  ['toWork', 'Top 20 verbs', 'walk', null, null, 10 * 60 * 1000, 0, 'train'],
  ['work', 'basic conjunctions', null, null, null, 2 * 60 * 1000, 0, 'toWork'],
]

export const data = [columns, ...rows]

export const options = {
  height: 275,
  gantt: {
    defaultStartDateMillis: new Date(2015, 3, 28),
  },
}
function Roadmap() {
  return (
    <div>
      <Chart
        chartType="Gantt"
        width="100%"
        height="50%"
        data={data}
        options={options}
        className="w-full"
      />
    </div>
  )
}

export default Roadmap
