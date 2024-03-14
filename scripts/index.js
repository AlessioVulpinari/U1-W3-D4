const startBtn = document.getElementById("startButton")
const numberExtBtn = document.getElementById("numberExtractionBtn")
let arrayOfCellNumbers = []
let arrayOfExtractedNumbers = []
let arrayOfPlayerTables = []

handleStart = () => {
  const numberBox = document.getElementById("startBox")
  const h1 = document.getElementById("h1")
  const h3 = document.getElementById("h3")
  const pTables = document.getElementById("pTables")

  const number = parseInt(numberBox.value)

  numberBox.hidden = true
  startBtn.hidden = true
  h3.hidden = true

  h1.hidden = false
  numberExtBtn.hidden = false
  pTables.hidden = false

  createTombolaTable()
  createPlayerTable(number)
}

handleNumberExtraction = () => {
  let randomNumber = generateRandomNumber()

  if (arrayOfExtractedNumbers.length <= 76) {
    while (arrayOfExtractedNumbers.includes(randomNumber)) {
      randomNumber = generateRandomNumber()
    }
  }

  arrayOfPlayerTables.forEach((array) => {
    array.forEach((number) => {
      if (parseInt(number.innerText) === randomNumber) {
        number.classList.add("selectedCell")
      }
    })
  })
  arrayOfExtractedNumbers.push(randomNumber)
  arrayOfCellNumbers[randomNumber - 1].classList.add("selectedCell")
}

generateRandomNumber = () => {
  let randomNumber = 0
  return (randomNumber = Math.ceil(Math.random() * 76))
}

const createTombolaTable = () => {
  const tombolaContainer = document.getElementById("tombolaContainer")
  for (i = 0; i < 76; i++) {
    const cellContainer = document.createElement("div")
    cellContainer.classList.add("cellContainer")

    const cellNumber = document.createElement("h3")
    cellNumber.classList.add("cellNumber")
    cellNumber.innerText = i + 1
    arrayOfCellNumbers.push(cellNumber)

    cellContainer.appendChild(cellNumber)
    tombolaContainer.appendChild(cellContainer)
  }
}

const createPlayerTable = (number) => {
  const playerTables = document.getElementById("playerTables")

  for (let j = 0; j < number; j++) {
    const tablePlayerContainer = document.createElement("div")
    tablePlayerContainer.classList.add("tablePlayerContainer")
    const playerTablesNumbers = []
    for (let i = 0; i < 24; i++) {
      let randomNumber = Math.ceil(Math.random() * 76)

      const cellContainer = document.createElement("div")
      cellContainer.classList.add("cellContainer")

      const cellNumber = document.createElement("h3")
      cellNumber.classList.add("cellNumber")
      cellNumber.innerText = randomNumber
      playerTablesNumbers.push(cellNumber)

      cellContainer.appendChild(cellNumber)
      tablePlayerContainer.appendChild(cellContainer)
    }
    playerTables.appendChild(tablePlayerContainer)
    arrayOfPlayerTables.push(playerTablesNumbers)
  }

  console.log(arrayOfPlayerTables)
}

window.onload = () => {
  numberExtBtn.addEventListener("click", handleNumberExtraction)
  startBtn.addEventListener("click", handleStart)
}
