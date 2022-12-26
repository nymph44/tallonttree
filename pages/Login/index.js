import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden  py-6 sm:py-12">
      <div class="relative py-3 sm:w-96 mx-auto text-center">
        <span class="text-2xl font-light ">Login to your account</span>
        <div class="mt-4 bg-base-100 shadow-md rounded-lg text-left">
          <div class="h-2 bg-primary rounded-t-md"></div>
          <div class="px-8 py-6 ">
            <label class="block font-semibold"> Username or Email </label>
            <input
              type="text"
              placeholder="Email"
              class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-primary-focus focus:ring-1 rounded-md"
            />
            <label class="block mt-3 font-semibold"> Username or Email </label>
            <input
              type="password"
              placeholder="Password"
              class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-primary-focus focus:ring-1 rounded-md"
            />
            <div class="flex justify-between items-baseline py-2">
              <button type="submit" class="btn btn-primary ">
                Login
              </button>
              <Link href="#" class="text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
