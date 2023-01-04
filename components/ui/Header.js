import React from 'react'

function Header({ title, user }) {
  return (
    <div className="py-4">
      <h1 className="font-bold text-4xl mb-4">{title}</h1>
      <div className="py-2 bg-base-100 w-fit px-2 rounded-xl flex items-center justify-center border border-primary">
        <p>
          <span className="">Welcome back</span>
          &nbsp;
          <span className=" uppercase font-bold">{user}</span>
        </p>
      </div>
    </div>
  )
}

export default Header
