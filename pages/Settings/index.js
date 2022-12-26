import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div class="container  max-w-3xl mt-8">
      <h1 class="text-2xl font-bold text-base-content px-6 md:px-0">
        Account Settings
      </h1>
      <ul class="flex border-b border-primary text-sm font-medium text-base-content mt-3 px-6 md:px-0">
        <li class="mr-8 text-base-content border-b-2 border-primary">
          <Link
            class="py-4 inline-block"
            href={{
              pathname: '/Settings',
            }}
          >
            Profile Info
          </Link>
        </li>

        <li class="mr-8 hover:text-primary">
          <Link
            class="py-4 inline-block"
            href={{
              pathname: '/Security',
            }}
          >
            Security
          </Link>
        </li>
      </ul>
      <form
        action="{{ route('profile.save') }}"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="w-full bg-base-300 rounded-lg mx-auto mt-8 pb-8 flex overflow-hidden rounded-b-none">
          <div class="w-1/3 bg-base-300 p-8 hidden md:inline-block">
            <h2 class="font-medium text-md text-base-content mb-4 tracking-wide">
              Profile Info
            </h2>
            <p class="text-xs text-base-content">
              Update your basic profile information such as Email Address, Name,
              and Image.
            </p>
          </div>
          <div class="md:w-2/3 w-full">
            <div class="py-8 px-16">
              <label for="name" class="text-sm text-base-content">
                Name
              </label>
              <input
                class="mt-2 border-2 bg-base-200 border-base-200 px-3 py-2 block w-full rounded-lg text-base text-base-content focus:outline-none focus:border-primary-focus"
                type="text"
                name="name"
              />
            </div>
            <hr class="border-base-200" />
            <div class="py-8 px-16">
              <label for="email" class="text-sm text-base-content">
                Email Address
              </label>
              <input
                class="mt-2 border-2 border-base-200 bg-base-200 px-3 py-2 block w-full rounded-lg text-base text-base-content focus:outline-none focus:border-primary-focus"
                type="email"
                name="email"
              />
            </div>
            <hr class="border-base-200" />
            <div class="py-8 px-16 clearfix">
              <label for="photo" class="text-sm text-base-content w-full block">
                Photo
              </label>
              <img
                class="rounded-full w-16 h-16 border-4 mt-2 border-base-200 float-left"
                id="photo"
                src="https://picsum.photos/200/300"
                alt="photo"
              />
              <div class="  btn btn-primary btn-sm btn-outline  mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                <input
                  type="file"
                  name="photo"
                  onchange="loadFile(event)"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />{' '}
                Change Photo
              </div>
            </div>
          </div>
        </div>
        <div class="p-8 pb-16 bg-base-200 clearfix rounded-b-lg border-t border-base-200">
          <p class="float-left text-xs text-base-content tracking-tight mt-2">
            Click on Save to update your Profile Info
          </p>
          <button
            type="submit"
            className="btn btn-primary btn-sm float-right mr-8"
            value="Save"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default index
