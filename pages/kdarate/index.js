import React from 'react'
import ProgressKDA from '../../components/global/ProgressKDA'
import Rate from '../../components/skill/rate/Rate'

function index() {
  return (
    <div className="flex flex-col items-center h-full -mt-10">
      <Rate />
      {/* <Argument /> */}
      <ProgressKDA />
    </div>
  )
}

export default index
