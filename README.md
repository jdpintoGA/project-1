# project-1

# Ultimate - Tic Tac Toe

Layout: 9 small grids of 3x3 will make 1 big 3x3 grid // scratched....
HTML version of board created!
Css Grid

Rules: X plays first in the center grid.
next movement will be in the small grid equivalent to the position of the X,

Ex: if layout is a grid made from small grids from 1 to 9 game starts in small grid number 5(center grid)
if X plays in the top right corner of the grid (3), p2 will play in the small grid 3.
Etc

After every play, the cell played has to be blocked and refuse new input.
when a sgrid has 3 in row a player is declared winner of that sgrid,
although the remaining cells stay playable , so, no small grid will be blocked access even if theres already a gridwinner.
when 3 small grids in row share the same "winner", game is over and winner is returned..

# Players

Can do Array of x and o

or IMG with class player 1
and IMG with class player 2

# Game logic

create 9 separate 1 to 9 grids and EX : Player1 plays cell 2 of grid 1 Blocking(2-1), next play on grid 2.
Player 2 plays cell 4 of grid 2, game goes to grid 4.

# Grid At Start

Every Cell from all 9 grids(Entire board) are Available to be played On, After 1st Move:

# Every Grid(small grids) except the

(user input)
