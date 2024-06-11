import React from "react"
import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  getDaysInMonth,
} from "date-fns"

function App() {
  let date = format(new Date(2014, 5, 11), "MMM/dd/yyyy")
  let button = getDaysInMonth(date)

  return (
    <div className="App">
      <div>{date}</div>
      {button}
    </div>
  )
}

export default App
