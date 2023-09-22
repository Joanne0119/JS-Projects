 const squares = document.querySelectorAll('.js-square');
 const score =document.querySelector('.js-score');
 let values = [];
let oxArray = [
  ['00','01','02'],
  ['10','11','12'],
  ['20','21','22']
];
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
      winnerMessage('r', i);
      stop();
    }
    else if(oxArray[0][i] === oxArray[1][i] && oxArray[1][i] === oxArray[2][i])
    {
      const winner = oxArray[0][i];
      console.log(`${winner} win!`);
      winnerMessage('c', i);
      stop();
    }
  }
  if(oxArray[0][0] === oxArray[1][1] && oxArray[1][1] === oxArray[2][2])
  {
    const winner = oxArray[0][0];
    console.log(`${winner} win!`);
    winnerMessage('o', 0);
    stop();
  }
  else if(oxArray[0][2] === oxArray[1][1] && oxArray[1][1] === oxArray[2][0]) {
    const winner = oxArray[0][2];
    console.log(`${winner} win!`);
    winnerMessage('o', 2);
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

 function stop()
 {
  squares.forEach((square) => {
    square.dataset.flag = 'unavailable';
    square.classList.add('game-over');
  })
 }