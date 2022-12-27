import React, { useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'

function index() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  )

  return (
    <div className="w-full bg-base-100 rounded-xl p-4">
      <h2 className="text-xl font-bold">Your Answer</h2>
      <textarea
        placeholder="You know a solution? post yout awnser!"
        className="textarea textarea-bordered w-full h-60 my-2"
      ></textarea>
      <div className="my-2 flex justify-end w-full">
        <button className="btn btn-primary">Post Your Answer</button>
      </div>
    </div>
  )
}

export default index
