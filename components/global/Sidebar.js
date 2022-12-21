import Link from 'next/link'
import React from 'react'
import { sidebar } from '../../data/config'

const Sidebar = () => {
  return (
    <aside className="relative w-60 h-screen max-h-screen  bg-base-300">
      <div className="py-4 px-6 flex items-center space-x-4">
        <img src={sidebar.logo} alt="Logo" className="w-8" />
        <h1 className="font-bold text-primary">{sidebar.title}</h1>
      </div>
      <nav className="py-4">
        <ul className="font-medium text-white">
          {sidebar.links.map((link) => (
            <li className="py-2 ">
              <Link href={`${link}`} key={link} className="sidebar-item-a">
                {link}
              </Link>
            </li>
          ))}

          <div className="inline-block bottom-0 w-full">
            <li className="py-2">
              <a href="/Settings" className="sidebar-item-a">
                {sidebar.settings}
              </a>
            </li>
            <li className="py-2">
              <a href="/Login" className="sidebar-item-a">
                {sidebar.signout}
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
