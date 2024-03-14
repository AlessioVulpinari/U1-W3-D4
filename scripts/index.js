const numberExtBtn = document.getElementById("numberExtractionBtn")
let arrayOfCellNumbers = []
let arrayOfExtractedNumbers = []
let arrayOfPlayerTables = []

handleNumberExtraction = () => {
  let randomNumber = Math.ceil(Math.random() * 76)

  if (arrayOfExtractedNumbers.includes(randomNumber)) {
    console.log(randomNumber, "è già stato estratto")
  } else {
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
  console.log(arrayOfExtractedNumbers)
  console.log(arrayOfPlayerTables)
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

  createPlayerTable(3)
  createTombolaTable()
}
