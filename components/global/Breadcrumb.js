import Link from 'next/link'
import React from 'react'

function Breadcrumb({ origin, page }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href={origin}>{origin}</Link>
        </li>
        <li>{page}</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
