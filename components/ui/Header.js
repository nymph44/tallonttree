import React from 'react'

function Header({title, user}) {

  return (
    <div className="py-4">
        <h1 className="font-bold text-4xl mb-4">{title}</h1>
        <p className="text-md">Welcome back {user}!</p>
    </div>
  )
}

export default Header