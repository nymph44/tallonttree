import { getSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div class="container  max-w-3xl mt-8">
      <h1 class="text-2xl font-bold text-base-content px-6 md:px-0">
        Account Settings
      </h1>
      <ul class="flex border-b border-primary text-sm font-medium text-base-content mt-3 px-6 md:px-0">
        <li class="mr-8 text-base-content  ">
          <Link
            class="py-4 inline-block"
            href={{
              pathname: '/Settings',
            }}
          >
            Profile Info
          </Link>
        </li>

        <li class="mr-8 hover:text-primary border-b-2 border-primary">
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
              Security
            </h2>
            <p class="text-xs text-base-content">
              You can update your password at any time.
            </p>
          </div>
          <div class="md:w-2/3 w-full">
            <div class="py-8 px-16">
              <label for="name" class="text-sm text-base-content">
                New Password
              </label>
              <input
                class="mt-2 border-2 border-base-200 px-3 py-2 bg-base-200 block w-full rounded-lg text-base text-base-content focus:outline-none focus:border-primary-focus"
                type="text"
                name="name"
              />
            </div>
            <hr class="border-base-200" />
            <div class="py-8 px-16">
              <label for="name" class="text-sm text-base-content">
                Confirm Password
              </label>
              <input
                class="mt-2 border-2 border-base-200 px-3 py-2 block w-full bg-base-200 rounded-lg text-base text-base-content focus:outline-none focus:border-primary-focus"
                type="text"
                name="name"
              />
            </div>
          </div>
        </div>
        <div class="p-8 pb-16 bg-base-100 clearfix rounded-b-lg border-t border-base-200">
          <p class="float-left text-xs text-base-content tracking-tight mt-2">
            Click on Save to update your Security Info
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
      },
    }
  }

  return {
    props: { session },
  }
}
