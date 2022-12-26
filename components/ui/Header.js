import React from 'react'

function Header({ title, user }) {
  return (
    <div className="py-4">
      <h1 className="font-bold text-4xl mb-4">{title}</h1>
      <p className="py-2 bg-base-100 w-80 rounded-xl flex items-center justify-center border border-primary">
        <span className="">Welcome back</span>
        &nbsp;
        <span className=" uppercase font-bold">{user}</span>
      </p>
    </div>
  )
}

export default Header
