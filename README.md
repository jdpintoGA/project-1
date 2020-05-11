### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# Ultimate - Tic Tac Toe

Visit the game in https://jdpintoga.github.io/project-1/

# Rules

Conventional Tic Tac Toe rules taken to a another level, with proihibithions on where the moves are allowed to be played on.

After every play, the cell played has to be blocked and refuse new input.
when a sgrid has 3 in row a player is declared winner of that sgrid,
although the remaining cells stay playable , so, no small grid will be blocked access even if theres already a gridwinner.
when 3 small grids in row share the same "winner", game is over and winner is returned..

# Players

2 human player mode only.

Player X and Player O have theyr marks injected by css styling.

# Game logic

Like its little brother, regular Tic Tac Toe, the Ultimate Tic Tac Toe, consists on having 3 marks in a row, being those rows horizontal, vertical or diagonal, although in ultimate TTT those 3 Marks will win a "grid" and so the player will only win the game once it gets 3 Won "grids" in a row of 3.

# Important code snippets

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

# Software, Languagues and Libraries used

-Html
-Css
-JavaScript
-Google Fonts
-Git and GitHub
