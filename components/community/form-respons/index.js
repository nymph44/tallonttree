import React, { useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import initFirebase from '../../../firebase/clientApp'

function index() {
  initFirebase()
  const [response, setResponse] = useState([])
  const randomId = Math.random().toString(36).substring(7)
  const CreateResponse = () => {
    // initFirebase()
    try {
      firebase
        .firestore()
        .collection('discussions.responses')
        .doc('response' + randomId)
        .set({
          response: response,
          rate: 1,
        })
        .then(alert('Data successfully written!'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full bg-base-100 rounded-xl p-4">
      <h2 className="text-xl font-bold">Your Answer</h2>
      <textarea
        placeholder="You know a solution? post yout awnser!"
        className="textarea textarea-bordered w-full h-60 my-2"
        onChange={(e) => setResponse(e.target.value)}
      ></textarea>
      <div className="my-2 flex justify-end w-full">
        <button onClick={() => CreateResponse()} className="btn btn-primary">
          Post Your Answer
        </button>
      </div>
    </div>
  )
}

export default index
