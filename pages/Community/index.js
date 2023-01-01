import Link from 'next/link'
import React from 'react'
import Leaderboard from '../../components/community/leaderboard/Leaderboard'
import Block from '../../components/community/ui/cards/Block'
import ListItem from '../../components/community/ui/discussion/ListItem'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
function index() {
  return (
    <div class="w-full">
      <div className="pt-4">
        <h1 className="font-bold text-4xl mb-4">Community</h1>
      </div>
      <div class="max-w-8xl">
        <div className="flex space-x-5 overflow-auto overflow-invisble no-scrollbar">
          <Block />
        </div>
      </div>
      <Link href="/Catalog">
        <div className="w-full flex justify-end pt-4 ">
          <button className="btn btn-sm ">See more skills</button>
        </div>
      </Link>
      <div className="flex space-x-8 w-full">
        <div className="w-full">
          <div className="my-8">
            <h1 className="text-2xl font-bold">Discussions & Articles</h1>
            <button className="mt-4 btn btn-primary btn-outline btn-xs font-normal">
              View all 556 discussions
            </button>
          </div>
          <div className=" -mt-2 p-4 rounded-xl bg-base-100 border border-base-300">
            <div className="flex">
              <div className="flex flex-col w-full">
                <ListItem />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Leaderboard />
        </div>
      </div>
    </div>
  )
}

export default index
