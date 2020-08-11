import React, { useState } from 'react'

import Editor from './components/editor/editor'
import Viewer from './components/viewer/viewer'
import './postcss/css/main.css'

// const LOCAL_TODO_KEY = 'todoApp.todos'

function App() {
  const [data, setData] = useState({})

  const bridgeData = d => {
    setData(d)
  }

  return (
    <>
      <Editor bridge={bridgeData} />
      <Viewer data={data} />
    </>
  )
}

export default App