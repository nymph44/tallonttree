import Link from 'next/link'
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect } from 'react'
import initFirebase from '../../../../firebase/clientApp'
import { discussions, comments } from '../../../../data/config'
import Divider from '../Divider'
import LoadMoreDivider from '../LoadMoreDivider'
function ListItem() {
  const [discussions, setDiscussions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // initFirebase()
  useEffect(() => {
    const fetchData = async () => {
      ;(async () => {
        try {
          const db = firebase.firestore()
          const query = db
            .collectionGroup('discussions')
            .orderBy('date', 'desc')

            .limit(8)
          const data = await query.get()
          const discussions = data.docs.map((doc) => doc.data())
          console.log(discussions)
          setDiscussions(discussions)
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      })()
    }
    fetchData()
  }, [])

  return (
    <div>
      {/* {discussions.map((discussion, index) => { */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        discussions.map((discussion, index) => {
          return (
            <>
              <div className=" my-2 flex justify-between w-full">
                <div className="flex w-full ">
                  <Link
                    href={{ pathname: '/Post', query: { id: discussion.id } }}
                    className="text-accent w-full "
                  >
                    <div className="flex w-full ">
                      <div>
                        <img
                          className="w-12 h-12 object-cover rounded-full mr-6"
                          src={discussion.photoUrl}
                          alt={discussion.author}
                        />
                      </div>
                      <div className="flex groupspace-x-2 ">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>

                        <div className="group cursor-pointer">
                          <h1 className="text-lg text-primary group-hover:text-primary-focus ">
                            {discussion.title}
                          </h1>
                          <div className="flex space-x-1 text-base-content text-sm">
                            <p>{discussion.author}</p>
                            <p> • </p>
                            <p>{discussion.date}</p>
                            <p> • </p>
                            {/* <p>{discussion.comments.length} replies</p> */}
                            <p>2 replies</p>
                            <div className="badge badge-primary">
                              {discussion.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="flex w-full justify-end items-center mr-auto -space-x-8 ml-8">
                    {/* {discussions.comments.map((comment) => {
                      return (
                        <img
                          className="w-8 h-8 object-cover rounded-full mr-4 border-2 z-10"
                          src={comment.photoUrl}
                          alt={comment.author}
                        />
                      )
                    })} */}

                    <img
                      className="w-8 h-8 object-cover rounded-full mr-4 border-2 z-10"
                      src="https://i.pravatar.cc/150?img=32"
                      alt="author"
                    />
                    <img
                      className="w-8 h-8 object-cover rounded-full mr-4 border-2 z-10"
                      src="https://i.pravatar.cc?img=32"
                      alt="author"
                    />
                  </div>
                </div>
              </div>
              {index + 1 < discussions.length ? (
                <Divider />
              ) : (
                <LoadMoreDivider />
              )}
            </>
          )
        })
      )}
      {/* })} */}
    </div>
  )
}

export default ListItem
