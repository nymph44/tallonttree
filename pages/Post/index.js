import React from 'react'
import Slug from '../../components/community/post'
import Respond from '../../components/community/respond'
import Related from '../../components/community/related'
import Linked from '../../components/community/linked'
import Formrespons from '../../components/community/form-respons'
import { getSession } from 'next-auth/react'
function index() {
  return (
    <div className="flex w-full space-x-8">
      <div className="w-2/3">
        <div>
          <Slug
            title="Post"
            date={'12 years, 10 months ago'}
            modified={'3 months ago'}
            views={2.1}
            votes={291}
            answers={2}
            tags={['HTML', 'JavaScript', 'DOM']}
            question={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          />
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="text-xl font-bold">Awnsers</h2>
          <div className="flex flex-col space-y-8 my-4">
            <Respond
              votes={1091}
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              dump="Some code dump"
            />
            <Respond
              votes={1091}
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              dump="Some code dump"
            />
            <Respond
              votes={1091}
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              dump="Some code dump"
            />
          </div>
        </div>
        <Formrespons />
      </div>
      <div className="w-1/3 mt-24 pt-2 flex flex-col space-y-8">
        <Related />
        <Linked />
      </div>
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
