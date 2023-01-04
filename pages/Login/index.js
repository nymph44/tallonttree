import Link from 'next/link'
import React, { useState } from 'react'
import { sidebar } from '../../data/config'
import { useSession, signIn, signOut } from 'next-auth/react'
import Dashboard from '../Dashboard'
import { db } from '../../firebase/clientApp'
function index() {
  const { data: session, status } = useSession()

  if (session) {
    return <Dashboard />
  } else {
    return (
      <div className="relative flex py-40 text-base-content antialiased flex-col justify-center overflow-hidden ">
        <div className="relative py-3 sm:w-96 mx-auto text-center ">
          <div className="pt-6 px-6 flex justify-center items-center space-x-4 py-4">
            <img src={sidebar.logo} alt="Logo" className="w-24" />
            <h1 className="font-bold text-primary text-4xl">{sidebar.title}</h1>
          </div>
          <div className="mt-4 bg-base-200 shadow-md rounded-lg text-left">
            {/* <span className="text-2xl font-light ">Login to your account</span> */}
            <div className="h-2 bg-primary rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold"> Username or Email </label>
              <input
                type="text"
                placeholder="Email"
                className="border border-base-100 w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-primary-focus focus:ring-1 rounded-md bg-base-300"
              />
              <label className="block mt-3 font-semibold">
                {' '}
                Username or Email{' '}
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border border-base-100 w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-primary-focus focus:ring-1 rounded-md bg-base-300"
              />

              <div className="flex flex-col items-baseline pt-4">
                <div className="w-full flex space-x-4">
                  <Link className="w-full" href="#">
                    <button type="submit" class="btn-primary btn w-full ">
                      Login
                    </button>
                  </Link>
                  <Link href="/SignUp" class="text-sm w-full">
                    <button
                      type="submit"
                      class="btn btn-outline btn-primary w-full"
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
                <Link
                  href="#"
                  class="text-sm hover:underline text-base-content flex justify-center mx-auto my-auto items-center pt-8 -mb-4"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="divider"></div>
            <div className=" w-full  px-4 pb-4">
              <div
                // onClick={signin}
                onClick={() => signIn()}
                className=" flex w-20 p-4 rounded-full items-center justify-center mx-auto hover:bg-primary-focus group transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#FFC107"
                    className="group-hover:fill-base-content transition-colors duration-300"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    className="group-hover:fill-base-content transition-colors duration-300"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    className="group-hover:fill-base-content transition-colors duration-300"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    className="group-hover:fill-base-content transition-colors duration-300"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
