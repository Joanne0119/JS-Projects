 const squares = document.querySelectorAll('.js-square');
 const score =document.querySelector('.js-score');
 let values = [];
 const winningCase = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]
 ]
let oArray = [];
let xArray = [];
let changing = 'o';

 squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    const raiseTheFlag = square.dataset.flag;
    if(raiseTheFlag === 'available')
    {

      checkWinner();
      const divElement = document.createElement('div');
      divElement.classList.add(changing);
      square.appendChild(divElement);
      square.dataset.flag = 'unavailable';
      if(changing === 'x') {
        changing = 'o';
        xArray[index] = index;
        console.log(xArray);
      }
      else {
        changing = 'x';
        oArray[index] = index; 
        console.log(oArray);
      }
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
  
 }
