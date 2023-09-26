 const squares = document.querySelectorAll('.js-square');
 const score = document.querySelector('.js-score');
 let values = [];
 let scores = {
  oScore: 0,
  xScore: 0,
  tieScore: 0
 }
let oxArray = [
  ['00','01','02'],
  ['10','11','12'],
  ['20','21','22']
];
let tieCase = 0;
console.log(oxArray);
let changing = 'o';

 squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    let raiseTheFlag = square.dataset.flag;
    if(raiseTheFlag === 'available')
    {
      const divElement = document.createElement('div');
      divElement.classList.add(changing);
      square.appendChild(divElement);
      raiseTheFlag = 'unavailable';
      tieCase++;
      console.log();
      if(changing === 'o') {
        changing = 'x';
        oxArray[Math.floor(index/3)][index%3] = 'o';
      }
      else {
        changing = 'o';
        oxArray[Math.floor(index/3)][index%3] = 'x'; 
      }
      console.log(oxArray);
      checkWinner();
    }
  })
 })

function restart()
{
  console.log('restart');
  squares.forEach((square, index) => {
    square.dataset.flag = 'available';
    tieCase = 0;
    scores.oScore = 0;
    scores.tieScore = 0;
    scores.xScore = 0;
    score.innerHTML = `X: 0 O: 0 Tie: 0`
  });
}

 function checkWinner()
 {
  for(let i = 0; i < 3; i++){
    console.log(i);
    if(oxArray[i][0] === oxArray[i][1] && oxArray[i][1] === oxArray[i][2])
    {
      const winner = oxArray[i][0];
      console.log(`${winner} win!`);
      scoreMessage(winner);
      winnerMessage('r', i);
      stop();
    }
    else if(oxArray[0][i] === oxArray[1][i] && oxArray[1][i] === oxArray[2][i])
    {
      const winner = oxArray[0][i];
      console.log(`${winner} win!`);
      scoreMessage(winner);
      winnerMessage('c', i);
      stop();
    }
  }
  if(oxArray[0][0] === oxArray[1][1] && oxArray[1][1] === oxArray[2][2])
  {
    const winner = oxArray[0][0];
    console.log(`${winner} win!`);
    scoreMessage(winner);
    winnerMessage('o', 0);
    stop();
  }
  else if(oxArray[0][2] === oxArray[1][1] && oxArray[1][1] === oxArray[2][0]) {
    const winner = oxArray[0][2];
    console.log(`${winner} win!`);
    scoreMessage(winner);
    winnerMessage('o', 2);
    stop();
  }
  else if(tieCase >= 9)
  {
    console.log(`tie!`);
    tieCase = 0;
    scoreMessage('tie');
    stop();
  }
 }

 function winnerMessage(direction, i) //direction = r(row), c(col), o(oblique)
 {
  if(direction === 'r')
  {
    let j = 0;
    squares.forEach((square, index) => {
      if(index === i*3+j && j < 3)
      {
        console.log(index);
        square.classList.add('win');
        j++;
      }
      else {
        j = 0;
      }
    })
  }
  else if(direction === 'c')
  {
    let j = 0;
    squares.forEach((square, index) => {
      if(index === i+j && j <= 6)
      {
        console.log(index);
        square.classList.add('win');
        j += 3;
      }
      else {
        j = 0;
      }
    })
  }
  else if(direction === 'o')
  {
    squares.forEach((square, index) => {
      if(i === 0)
      {
        squares[0].classList.add('win');
        squares[4].classList.add('win');
        squares[8].classList.add('win');
      }
      else if(i === 2)
      {
        squares[2].classList.add('win');
        squares[4].classList.add('win');
        squares[6].classList.add('win');
      }
     })
  }
 }

 function scoreMessage(winner)
 {
  if(winner === 'o')
  {
    scores.oScore++;
    score.innerHTML = `X: ${scores.xScore} O: ${scores.oScore} Tie: ${scores.tieScore}`;
  }
  else if(winner === 'x')
  {
    scores.xScore++;
    score.innerHTML = `X: ${scores.xScore} O: ${scores.oScore} Tie: ${scores.tieScore}`;
  }
  else if(winner === 'tie')
  {
    scores.tieScore++;
    score.innerHTML = `X: ${scores.xScore} O: ${scores.oScore} Tie: ${scores.tieScore}`;
  }
 }

 function stop()
 {
  squares.forEach((square) => {
    square.dataset.flag = 'unavailable';
    square.classList.add('game-over');
  });
 }

 function replay()
 {
  document.body.addEventListener('click', () => {
    squares.forEach((square) => {
      square.dataset.flag = 'available';
      square.classList.remove('game-over');
    });
  });
 }