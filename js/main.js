//the game
function gamegrid() {
  //declaring variables
  const xClass = 'x'
  const circleClass = 'circle'
  const cellElements = document.querySelectorAll('.small-cell')
  const board = document.getElementsByClassName('small-group-cells')
  let player
  let Owins = []
  let Xwins = []
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    //2nd
    [9, 10, 11],
    [12, 13, 14],
    [15, 16, 17],
    [9, 12, 15],
    [10, 13, 16],
    [11, 14, 17],
    [9, 13, 17],
    [11, 13, 15],
  ]

  //

  cellElements.forEach(cell => {
    cell.addEventListener('click', handleclick, { once: true })
  })

  function handleclick(e) {
    //place mark - check
    const cell = e.target
    currentClass = player ? circleClass : xClass
    placemark(cell, currentClass)
    //placemark above
    console.log(cell, currentClass)
    //check win
    if (wins(currentClass)) {
      if (swapTurn() === player) {
        console.log('o win')
      } else {
        console.log('x win')
      }
    }
    //check draw

    //swap turn -check
    swapTurn()
    //change grid
  }
  //place mark
  function placemark(cell, currentClass) {
    cell.classList.add(currentClass)
  }
  //swap turn
  function swapTurn() {
    player = !player
  }

  //wins
  function wins(currentClass) {
    return winningCombos.some(combination => {
      return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
      })
    })
  }
  //to solve "next grid", i can probably use a forEach click event on the small grid at the same time as cell, with once:true. but this can be very buggy,
  //the correct way of doing this would probably be "link" the grid cell id's with the grid id's.
  //eg to myself
  //if click == cell id=19 19 29 39 49 59 69 79 89 99 next play is on grid id=9
}

// new game and reset

//

window.onload = gamegrid
