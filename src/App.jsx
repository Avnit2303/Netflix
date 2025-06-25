import React from "react"
import Body from "./componnet/Body"
import { Provider } from "react-redux"
import Userstore from "../utils/Userstore.js"

function App() {

  return (
    <>
    <Provider store={Userstore}>
      <Body />
      </Provider>
    </>
  )
}

export default App
