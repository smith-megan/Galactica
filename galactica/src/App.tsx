import { useEffect, useState } from "react"
import { format, getDaysInMonth } from "date-fns"

function App() {
  interface HistoryStructure {
    [index: number]: [string]
  }

  const [history, setHistory] = useState<HistoryStructure>(
    {} as HistoryStructure
  )
  // history[1] = 'red'

  const [buttonArray, setButtonArray] = useState([305, 90])
  let date = format(new Date(2014, 6, 11), "MMM/dd/yyyy")
  let dayCount = getDaysInMonth(date)

  let renderButtons = (dayCount: number) => {
    let newArray = []
    for (let i = 1; i < dayCount + 1; i++) {
      newArray.push(i)
    }
    setButtonArray(newArray)
  }

  useEffect(() => {
    renderButtons(dayCount)
  }, [date])

  return (
    <div className="App">
      <div>{date}</div>
      {buttonArray.map((item: number) => {
        return (
          <div key={"button-" + { item }}>
            <h1>{item}</h1>
            <button
              onClick={() => {
                console.log(item)
                // history[1] = "green"
                setHistory(history)
                console.log(history)
              }}
            >
              press
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default App
