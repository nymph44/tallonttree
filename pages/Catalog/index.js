import { height } from '@mui/system'
import { getSession } from 'next-auth/react'
import React from 'react'
import Viewed from '../../components/catalog/Viewed/Viewed'
import Block from '../../components/community/ui/cards/Block'
import Carousel from '../../components/skill/carousel/Carousel'
import Categories from '../../components/skill/categories/Categories'

function index() {
  return (
    <>
      <div className="py-4">
        <h1 className="font-bold text-4xl mb-4">Catalog - Skills</h1>
        <p>Manage your skills and preferences here</p>
      </div>
      <Carousel />
      <div className="flex flex-col space-x-4 my-4">
        <Categories />
        <div className="flex">
          <div className="flex flex-wrap space-y-4 w-4/5">
            <div className="my-4 flex flex-col space-y-4">
              <label className="text-base-content text-xl uppercase font-bold">
                Trending
              </label>
              <Block />
            </div>
            <div className="my-4 flex flex-col space-y-4">
              <label className="text-base-content text-xl uppercase font-bold">
                Top rated
              </label>
              <Block />
            </div>
          </div>
          <div className="w-1/5 pt-4">
            <Viewed />
          </div>
        </div>
      </div>
    </>
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
