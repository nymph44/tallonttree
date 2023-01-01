import Link from 'next/link'
import React from 'react'
import { sidebar } from '../../data/config'

const Sidebar = () => {
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`
  return (
    <aside className="relative  w-72 h-screen  bg-neutral">
      <div className="pt-6 px-6 flex items-center space-x-4">
        <img src={sidebar.logo} alt="Logo" className="w-8" />
        <h1 className="font-bold text-primary">{sidebar.title}</h1>
      </div>
      <div className="divider"></div>
      <nav className="w-full">
        <ul className="font-medium w-full flex flex-col space-y-4">
          {/* {sidebar.links.map((link) => (
            <Link href={`${link}`} key={link} className="text-sm">
              <li className="py-2   mx-2 flex px-4 space-x-4 rounded-full text-base-content hover:text-primary hover:bg-base-100 transition font-medium duration-200 items-center">
                <p>{link}</p>
              </li>
            </Link>
          ))} */}
          <Link
            className="py-2 mx-2 flex px-4 space-x-4 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus transition font-medium duration-200 items-center"
            href={{
              pathname: '/Dashboard',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>

            <p>Dashboard</p>
          </Link>
          <Link
            className="py-2 mx-2 flex px-4 space-x-4 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus transition font-medium duration-200 items-center"
            href={{
              pathname: '/Skills',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <p>Skills</p>
          </Link>

          <Link
            className="py-2 mx-2 flex px-4 space-x-4 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus transition font-medium duration-200 items-center"
            href={{
              pathname: '/Agenda',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            <p>Agenda</p>
          </Link>
          <div className="divider"></div>
          <Link
            href={{ pathname: '/Community' }}
            className="py-2 mx-2 flex px-4 space-x-4 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus transition font-medium duration-200 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <p>Community</p>
          </Link>
          <Link
            href={{ pathname: '/Catalog' }}
            className="py-2 mx-2 flex px-4 space-x-4 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus transition font-medium duration-200 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>

            <p>Catalog</p>
          </Link>
          <div className="divider"></div>
          <div className="px-4 flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"
              />
            </svg>

            <label className="uppercase text-sm text-gray-500">Pinned</label>
          </div>
        </ul>
      </nav>
      {/* <div className="flex w-full space-x-4 sidebar-item-a"> */}

      <div className="py-4 w-full flex flex-col  absolute bottom-0">
        <div className="divider bottom-auto"></div>
        <ul className="font-medium w-64 flex flex-col space-y-4">
          <li className="py-2 min-w-full  mx-2 flex px-4 space-x-2 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus  transition font-medium duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <Link
              className="text-sm items-center flex"
              href={{ pathname: '/Settings' }}
            >
              {sidebar.settings}
            </Link>
          </li>
          <li className="py-2 min-w-full  mx-2 flex px-4 space-x-2 rounded-full text-neutral-content hover:text-primary hover:bg-neutral-focus transition font-medium duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>

            <Link
              className="text-sm items-center flex"
              href={{ pathname: '/Login', query: '' }}
            >
              {sidebar.signout}
            </Link>
          </li>
        </ul>
        <div className="divider bottom-auto"></div>
        <div className="px-6 flex space-x-4">
          <div className=" flex bg-primary rounded-full w-12 h-12 aspect-square	">
            <div className="avatar online">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQFe9oneTfbu6g/profile-displayphoto-shrink_800_800/0/1538600782762?e=1678320000&v=beta&t=_KcJ3soYitVCFk6k8o8kbRxA1TtRYLdF4cuW4EmOovM"
                className="rounded-full w-12 h-12"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-1 my-auto ">
            <p className="text-sm font-bold text-neutral-content">
              Alexander Janssen
            </p>
            <p className="text-xs text-neutral-content">
              ajn.janssen@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </aside>
  )
}

export default Sidebar
