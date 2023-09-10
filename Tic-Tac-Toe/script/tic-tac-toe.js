 const squares = document.querySelectorAll('.js-square');
 let values = [];
 let restartFlag = 0;

 computer();
 squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    const raiseTheFlag = square.dataset.flag;
    if(raiseTheFlag === 'available')
    {
      checkWinner();
      const x = document.createElement('div');
      x.classList.add('x');
      square.appendChild(x);
      values[index] = 'x';
      square.dataset.flag = 'unavailable';
      restartFlag++;
      console.log(restartFlag);
      if(restartFlag >= 9){ restart(); }
      computer();
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
  console.log(values);
 }

 function onePersonPlay()
 {

 }

 function computer()
 {
  const comMove = Math.floor(Math.random() * 10) % 9;
  console.log(comMove);
  const raiseTheFlag = squares[comMove].dataset.flag;
  console.log(squares[comMove].dataset.flag);
  if(raiseTheFlag === 'available')
  {
    const o = document.createElement('div');
    o.classList.add('o');
    squares[comMove].appendChild(o);
    values[comMove] = 'o';
    squares[comMove].dataset.flag = 'unavailable';
    restartFlag++;
    if(restartFlag >= 9){ restart(); }
  }
  else {
    computer();
  }
 }