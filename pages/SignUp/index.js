import Link from 'next/link'
import React, { useState } from 'react'

function index() {
  return (
    <section className=" gradient-form md:h-screen">
      <div className="container px-6 ">
        <div className="flex w-1/2 mx-auto justify-center items-center flex-wrap g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-base-300 shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="w-full px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className=" mb-16 flex items-center justify-center space-x-4">
                      <img
                        className="w-20"
                        src="/logo/android-chrome-512x512.png"
                        alt="logo"
                      />
                      <h4 className="text-primary font-bold text-4xl">
                        Talent Tree
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4 text-base-content ">
                        Please create your account
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base-content  font-normal  bg-base-200 bg-clip-padding border border-solid border-base-300 rounded transition ease-in-out m-0 focus:text-base-content  focus:bg-base-100 focus:border-primary-focus focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="First name"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base-content  font-normal  bg-base-200 bg-clip-padding border border-solid border-base-300 rounded transition ease-in-out m-0 focus:text-base-content  focus:bg-base-100 focus:border-primary-focus focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Last name"
                        />
                      </div>

                      {/* Datepicker */}

                      <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          datepicker
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Select date"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base-content  font-normal  bg-base-200 bg-clip-padding border border-solid border-base-300 rounded transition ease-in-out m-0 focus:text-base-content  focus:bg-base-100 focus:border-primary-focus focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base-content  font-normal  bg-base-200 bg-clip-padding border border-solid border-base-300 rounded transition ease-in-out m-0 focus:text-base-content  focus:bg-base-100 focus:border-primary-focus focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base-content  font-normal  bg-base-200 bg-clip-padding border border-solid border-base-300 rounded transition ease-in-out m-0 focus:text-base-content  focus:bg-base-100 focus:border-primary-focus focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Confirm password"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base-content  font-normal  bg-base-200 bg-clip-padding border border-solid border-base-300 rounded transition ease-in-out m-0 focus:text-base-content  focus:bg-base-100 focus:border-primary-focus focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Your email"
                        />
                      </div>
                      <div class="text-center pt-1 mb-12 pb-1">
                        <button
                          className="btn btn-primary btn-block  px-3 py-1.5 text-base-content  font-normal  bg-primary bg-clip-padding border border-solid border-primary-500 rounded transition ease-in-out m-0 hover:bg-primary-600 hover:border-primary-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-primary-500 focus:ring-offset-primary-200 focus:border-primary-500 active:bg-primary-600 active:border-primary-600"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Create account
                        </button>
                        <div className="my-4">
                          <Link
                            href={{ pathname: '/Forgotpassword' }}
                            className="text-base-content py-4"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        {/* <div className="my-4">
                          <Link
                            href={{ pathname: '/SignUp' }}
                            className="text-base-content"
                          >
                            <p className="mb-0 mr-2 text-base-content">
                              Don't have an account?
                            </p>
                          </Link>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="bg-hero-pattern lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
