 const squares = document.querySelectorAll('.js-square');

 squares.forEach((square) => {
  square.addEventListener('click', () => {
    const x = document.createElement('div');
    x.classList.add('x');
    square.appendChild(x);
  })
 })