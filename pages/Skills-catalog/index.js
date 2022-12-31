import { height } from '@mui/system'
import React from 'react'
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
      <Categories />
    </>
  )
}

export default index
