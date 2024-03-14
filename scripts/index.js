const numberExtBtn = document.getElementById("numberExtractionBtn")
let arrayOfCellNumbers = []
let arrayOfExtractedNumbers = []

handleNumberExtraction = () => {
  let randomNumber = Math.ceil(Math.random() * 76)

  if (arrayOfExtractedNumbers.includes(randomNumber)) {
    console.log(randomNumber, "è già stato estratto")
  } else {
    arrayOfExtractedNumbers.push(randomNumber)
    arrayOfCellNumbers[randomNumber - 1].style.backgroundColor = "black"
  }
  console.log(arrayOfExtractedNumbers)
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

  // console.log(arrayOfCellNumbers)
}

window.onload = () => {
  numberExtBtn.addEventListener("click", handleNumberExtraction)

  createTombolaTable()
}
