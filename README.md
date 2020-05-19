### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# Ultimate - Tic Tac Toe

![alt text](https://i.ibb.co/hLcdJKT/Screenshot-2020-05-12-at-04-15-39.png 'Ultimate Tic Tac Toe')

# About the project

This was my first collision with web development, a project using only HTML CSS and JS creating a game from scratch, applying a “think as a developer” mindset, coming across problems I never had before, facing and solving those problems and learning as much as possible from them. It was a simple project that was worth every line.

Visit the game in https://jdpintoga.github.io/project-1/

# Rules

Conventional Tic Tac Toe rules taken to a another level, with proihibithions on where the moves are allowed to be played on.

After every play, the cell played has to be blocked and refuse new input.
when a grid has 3 in row a player is declared winner of that sgrid,
although the remaining cells stay playable , so, no small grid will be blocked access even if theres already a gridwinner.
when 3 small grids in row share the same "winner", game is over and winner is returned..

# Players

2 human player mode only.

Player X and Player O have their marks injected by css styling.

# Game logic

Like its little brother Tic Tac Toe, the Ultimate Tic Tac Toe, consists on having 3 marks in a row, being those rows horizontal, vertical or diagonal, although in ultimate TTT those 3 Marks will win a "grid" and victory will only be achieved when the player gets 3 Won "grids" in a row.

# Important code snippets

The most important function is displayed below, it's the fundamental clicking to make a move, checking if the click is valid and alternating turns between players.

```
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
```

Creation of X and O in CSS
The following code snippet contains the created marks when;
the hovered position is invalid, represented by a Forbidden cursor.
When valid, the current player will see his mark faded in the cell currently in hover, once clicked the mark gains a bolder visual.

```
.small-cell.ex,
.small-cell.circle {
  cursor: not-allowed;
}

.small-cell.ex::before,
.small-cell.ex::after,
.small-cell.circle::before {
  background-color: rgb(255, 255, 255);
}

.small-group-cells.ex .small-cell:not(.ex):not(.circle):hover::before,
.small-group-cells.ex .small-cell:not(.ex):not(.circle):hover::after,
.small-group-cells.circle .small-cell:not(.ex):not(.circle):hover::before {
  background-color: rgb(134, 134, 134);
}

.small-cell.ex::before,
.small-cell.ex::after {
  content: '';
  position: absolute;
  width: calc(var(--mark-size) * 0.5);
  height: calc(var(--mark-size) * 2.5);
}

.small-cell.ex::before,
.small-group-cells.ex .small-cell:not(.ex):not(.circle):hover::before {
  transform: rotate(45deg);
}

.small-cell.ex::after,
.small-group-cells.ex .small-cell:not(.ex):not(.circle):hover::after {
  transform: rotate(-45deg);
}

.small-cell.circle::before,
.small-cell.circle::after,
.small-group-cells.circle .small-cell:not(.ex):not(.circle):hover::before,
.small-group-cells.circle .small-cell:not(.ex):not(.circle):hover::after {
  content: '';
  position: absolute;
  border-radius: 50%;
}

.small-cell.circle::before,
.small-group-cells.circle .small-cell:not(.ex):not(.circle):hover::before {
  width: calc(var(--mark-size) * 2);
  height: calc(var(--mark-size) * 2);
}
.small-cell.circle::after,
.small-group-cells.circle .small-cell:not(.ex):not(.circle):hover::after {
  width: calc(var(--mark-size) * 1.2);
  height: calc(var(--mark-size) * 1.2);
  background-color: rgb(77, 77, 77);
}
```

The following code snippet contains my approach to an helpful UI tool creating an highlight to the grid where the next move is allowed.

```

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
```

The Highlight class style can be found below.

```
.highlight {
  animation: pulseBorder 2s infinite;
}
@keyframes pulseBorder {
  0% {
    transform: scale(0.95);
    box-sizing: 100% 100%;
    border: 2px solid gold;
  }

  70% {
    transform: scale(1);
    box-sizing: 100% 100%;
    border: 2px solid gold;
  }

  100% {
    transform: scale(0.95);
    box-sizing: 100% 100%;
    border: 2px solid gold;
  }
}
```

# Software, Languages and Libraries.

• Html5  
• Css3  
• JavaScript(ES6)  
• Google Fonts  
• Git and GitHub

# Future Developments.

• Winning condition, currently the users receive no input of victory and the game never ends.

• AI player, with game logic being already created, an AI could be introduced to the platform, maybe even 2, AI vs AI could be interesting to study different game strategies.

Because changing this project would affect the accuracy of what I achieved during the given deadline, I may create a copy and implement these ideas.
