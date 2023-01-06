import { getSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Leaderboard from '../../components/community/leaderboard/Leaderboard'
import Block from '../../components/community/ui/cards/Block'
import ListItem from '../../components/community/ui/discussion/ListItem'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
import firebase from 'firebase/app'
import Divider from '../../components/community/ui/Divider'
import LoadMoreDivider from '../../components/community/ui/LoadMoreDivider'
function index() {
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
      <div className="divider"></div>
      <div className="flex space-x-8 w-full">
        <div className="w-full">
          <div className="my-8">
            <h1 className="text-2xl font-bold">Discussions & Articles</h1>
            <button className="mt-4 btn btn-primary btn-outline btn-xs font-normal">
              View all 556 discussions
            </button>
          </div>
          <div className=" -mt-2 p-4 rounded-xl bg-base-200 border border-base-300">
            <div className="flex">
              <div className="flex flex-col w-full">
                <div>
                  {/* {discussions.map((discussion, index) => { */}
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
                    </div>
                  ) : (
                    discussions.map((discussion, index, id) => {
                      return (
                        <>
                          <div className=" my-2 flex justify-between w-full">
                            <div className="flex w-full ">
                              <Link
                                href={{
                                  pathname: '/Post/' + id[index].id,
                                }}
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
                {/* <ListItem /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 ">
          <Leaderboard />
        </div>
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
