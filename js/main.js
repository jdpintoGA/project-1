let suggestedColour = false
let runningCheck = []

//util function
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  )

//the game

function gamegrid() {
  //declaring variables
  let allowedParentIndex = null
  const emptyClass = 'empty'
  const xClass = 'ex'
  const circleClass = 'circle'
  let cellElements = Array.from(document.querySelectorAll('.small-cell'))
  let playHere = document.getElementById(allowedParentIndex)

  const testGameArray = chunk(
    cellElements.map(() => emptyClass),
    9,
  )

  const gameArray = testGameArray.map(gridElementArray => {
    return { cells: gridElementArray, value: emptyClass }
  })

  const elements = chunk(cellElements, 9)

  const board = document.getElementsByClassName('small-group-cells')
  let player
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  elements.forEach((cells, parentIndex) => {
    cells.forEach((cell, childIndex) =>
      cell.addEventListener('click', () =>
        handleclick(parentIndex, childIndex, cell),
      ),
    )
  })

  function handleclick(parentIndex, childIndex, cell) {
    currentClass = player ? circleClass : xClass
    placemark(parentIndex, childIndex, currentClass, cell)
  }

  //place mark
  function placemark(parentIndex, childIndex, currentClass, cell) {
    if (
      gameArray[parentIndex].cells[childIndex] === emptyClass &&
      (parentIndex === allowedParentIndex || allowedParentIndex === null)
    ) {
      // Add O or X to the element
      gameArray[parentIndex].cells[childIndex] = currentClass
      cell.classList.add(currentClass)
      // Capture which child index we clicked last
      allowedParentIndex = childIndex
      //highlighting valid move
      playHere = document.getElementById(allowedParentIndex)
      removePrevious = document.getElementById(runningCheck[0])

      if (suggestedColour) {
        removePrevious.classList.remove('highlight')
        suggestedColour = false
      }
      playHere.classList.add('highlight')
      runningCheck.unshift(allowedParentIndex)
      console.log(runningCheck)
      suggestedColour = true

      // playHere.classList.add('highlight')
      // setTimeout(() => {
      //   playHere.classList.remove('highlight')
      // }, 4000)
      // allowHere()

      //check win
      if (wins(currentClass)) {
        gameArray[parentIndex].value = currentClass
      }

      // Change Turn
      swapTurn()
    }
  }

  //highlight
  function allowHere() {}

  //swap turn
  function swapTurn() {
    player = !player
  }

  //wins
  function wins(currentClass) {
    return winningCombos.some(combination => {
      return combination.every(index =>
        cellElements[index].classList.contains(currentClass),
      )
    })
    console.log(currentClass)
  }
}

//restart - wip
const restartButton = document.getElementsByClassName('button')

window.onload = gamegrid
