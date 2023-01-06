import React, { useEffect, useState } from 'react'
import Slug from '../../components/community/post'
import Respond from '../../components/community/respond'
import Related from '../../components/community/related'
import Linked from '../../components/community/linked'
import Formrespons from '../../components/community/form-respons'
import { getSession, useSession } from 'next-auth/react'
import firebase from 'firebase/app'
import { useRouter } from 'next/router'
import initFirebase from '../../firebase/clientApp'

import Image from 'next/image'

export default function Post({ id }) {
  const { data: session, status } = useSession()
  const [response, setResponse] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      ;(async () => {
        try {
          const db = firebase.firestore()
          const query = db.collectionGroup('discussions.responses')

          const data = await query.get()
          const response = data.docs.map((doc) => doc.data())
          setResponse(response)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      })()
    }
    fetchData()
  }, [])

  return (
    <div className="flex w-full space-x-8">
      <div className="w-2/3">
        <div>
          <Slug
            title="How to pronounce Exceção (exception)?"
            date={'1 years, 2 months ago'}
            modified={'3 months ago'}
            views={2.1}
            votes={291}
            answers={2}
            tags={['Pronounciation', 'Portuguese', 'Brazil', 'Portugal']}
            question={
              'Portuguese pronunciation is tough. Really, pronouncing any language you’re not native to can be tricky. With Portuguese, you have the advantage that the alphabet is almost the same, but it’s also just different enough to trip you up. Fortunately, you’re not alone. You can see in the video above seven different non-native speakers struggling with seven tricky Portuguese terms. If you want to do better them, good news! We’ve put together a guide to the seven words, focusing on the trickiest letters and letter combinations. We also have audio of each word as said by a native speaker. You’ll be saying them confidently in no time.'
            }
          />
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="text-xl font-bold">Awnsers</h2>
          <div className="flex flex-col space-y-8 my-4">
            <Respond
              votes={12}
              awnser="xc — The letter “x” can be a big problem for people learning Portuguese. There are five different ways of pronouncing it, and the rules governing when to use each pronunciation have so many exceptions that it’s sometimes better not to bother. For the surest results, we recommend consulting a dictionary with phonetic transcriptions. In this word, the X is combined with C, so it sounds like the “s” in “soap.”"
              //   dump="Some code dump"
            />
            <Respond
              votes={20}
              awnser="ç — This symbol under the C is called a cedilla (or cedilha, in Portuguese) and it changes the way the C is pronounced in languages like Portuguese, French and Catalan. In some languages, like Turkish and Kurdish, it exists as a proper letter in its own right — the “Ꝣ.” In Portuguese, it’s pronounced like the “s” in “Saturday.”"
              //   dump="Some code dump"
            />
            <Respond
              votes={10}
              awnser="ão — This one is a real nightmare for non-native Portuguese speakers. There is no exact match for it in the English language, but if you think of “oun” being spoken in a very nasal way you’re getting close. The symbol on top of the A is called a tilde (also til in Portuguese), and indicates that the vowel is pronounced nasally."
              //   dump="Some code dump"
            />
            {response.map((response) => {
              return (
                <div className="bg-base-300 rounded-xl">
                  <div>
                    <div className="flex space-x-4">
                      {/* Votes */}
                      <div className="flex bg-base-300 rounded-xl py-4 w-full">
                        <div className="w-1/12 relative flex flex-col space-y-4 px-4">
                          <div className="flex justify-center items-center cursor-pointer">
                            <button className="btn btn-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="text-xl font-bold flex justify-center items-center">
                            {response.rate}
                          </div>
                          <div className="flex justify-center items-center cursor-pointer">
                            <button className="btn btn-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="w-11/12 rounded-xl">
                          <div className="mx-2 pr-4">
                            <p>{response.response}</p>
                            {/* <div className="bg-base-200 p-4 rounded-lg my-4">
                            <p>{dump}</p>
                          </div> */}
                          </div>
                          <div className="divider my-4 pr-8"></div>
                          <div className="flex space-x-4 bottom-0">
                            <div className="flex space-x-2 items-center">
                              <img
                                className="rounded-full w-8 h-8 object-cover"
                                src={session.user.image}
                              />
                              <p>
                                <span className="font-bold text-primary">
                                  (You){' '}
                                </span>
                                {session.user.name}
                              </p>
                            </div>
                            <div className="flex space-x-4 items-center">
                              <p className="hover:underline hover:text-primary cursor-pointer">
                                Reply
                              </p>
                              <p className="hover:underline hover:text-primary cursor-pointer">
                                Share
                              </p>
                              <p className="hover:underline hover:text-primary cursor-pointer">
                                Report
                              </p>
                              <p className="hover:underline hover:text-primary cursor-pointer">
                                Pin
                              </p>
                              <p className="hover:underline hover:text-primary cursor-pointer">
                                Follow
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
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

// export default Post

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
