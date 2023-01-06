import React from 'react'
import Breadcrumb from '../../global/Breadcrumb'
import Header from '../../ui/Header'

function Slug({
  title,
  date,
  modified,
  views,
  votes,
  answers,
  tags,
  question,
  dump,
}) {
  return (
    <div>
      {/* <h1 className="text-2xl">{title}</h1> */}
      <div className="pt-4">
        <h1 className="font-bold text-4xl mb-4">{title}</h1>
        <Breadcrumb origin="Community" page="title" />
      </div>
      <div className="my-4 flex space-x-4">
        <p className="text-base-content text-xs">
          <span className="text-base-content opacity-75">Asked:&nbsp;</span>
          {date}
        </p>

        <p className="text-base-content text-xs">
          <span className="text-base-content opacity-75">Modified:&nbsp;</span>
          {modified} ago
        </p>
        <p className="text-base-content text-xs">
          <span className="text-base-content opacity-75">Viewed:&nbsp;</span>
          {views} k
        </p>
      </div>

      <div>
        <div className=" ">
          <div className="flex space-x-4">
            {/* Votes */}
            <div className="flex bg-base-300 rounded-xl py-4 ">
              <div className="w-1/12 flex flex-col space-y-4">
                <div className="flex justify-center items-center cursor-pointer">
                  <button className="btn btn-circle">
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
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-xl font-bold flex justify-center items-center">
                  {votes}
                </div>
                <div className="flex justify-center items-center cursor-pointer">
                  <button className="btn btn-circle">
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full rounded-xl">
                <div className="mx-2 pr-4">
                  <p>{question}</p>
                  {/* <div className="bg-base-200 p-4 rounded-lg my-4">
                    <p>
                      {'<'}
                      <span className="text-primary">ui</span>:
                      <span className="text-primary">include</span>{' '}
                      <span className="text-primary">src</span>=
                      <span className="text-primary">"b.xhtml"</span>
                      {'/>'}
                    </p>
                  </div> */}
                  <div>
                    <p>{dump}</p>
                  </div>
                  {/* Badges */}
                  <div className=" flex space-x-4 my-4 ">
                    {tags.map((tag) => (
                      <div className="badge badge-accent">{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slug
