import React from "react"
import {checkProfile} from "./scripts/check-profile"

export default function App() {
  return (
    <div>
      <button onClick={checkProfile}>Get Info for address 0xba1132bc08f82fe2</button>
    </div>
  )
}