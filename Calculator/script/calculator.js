// const acBtn = document.querySelector('.js-ac-btn');
// const postiveNegativeBtn = document.querySelector('.js-postive-negative-btn');
// const percentBtn = document.querySelector('.js-percent-btn');
// const divideBtn = document.querySelector('.js-divide-btn');
// const sevenBtn = document.querySelector('.js-seven-btn');
// const eightBtn = document.querySelector('.js-eight-btn');
// const nineBtn = document.querySelector('.js-nine-btn');
// const multiplyBtn = document.querySelector('.js-multiply-btn');
// const fourBtn = document.querySelector('.js-four-btn');
// const fiveBtn = document.querySelector('.js-five-btn');
// const sixBtn = document.querySelector('.js-six-btn');
// const minusBtn = document.querySelector('.js-minus-btn');
// const oneBtn = document.querySelector('.js-one-btn');
// const twoBtn = document.querySelector('.js-two-btn');
// const threeBtn = document.querySelector('.js-three-btn');
// const plusBtn = document.querySelector('.js-plus-btn');
// const zeroBtn = document.querySelector('.js-zero-btn');
// const dotBtn = document.querySelector('.js-dot-btn');
// const equationBtn = document.querySelector('.js-equation-btn');

// acBtn.addEventListener('click', () => {
//   clear();
// });
// postiveNegativeBtn.addEventListener('click', () => {
  
// });
// percentBtn.addEventListener('click', () => {
//   calculatePrint('%');
// });
// divideBtn.addEventListener('click', () => {
//   calculatePrint(' / ');
// });
// sevenBtn.addEventListener('click', () => {
//   calculatePrint('7');
// });
// eightBtn.addEventListener('click', () => {
//   calculatePrint('8');
// });
// nineBtn.addEventListener('click', () => {
//   calculatePrint('9');
// });
// multiplyBtn.addEventListener('click', () => {
//   calculatePrint(' * ');
// });
// fourBtn.addEventListener('click', () => {
//   calculatePrint('4');
// });
// fiveBtn.addEventListener('click', () => {
//   calculatePrint('5');
// });
// sixBtn.addEventListener('click', () => {
//   calculatePrint('6');
// });
// minusBtn.addEventListener('click', () => {
//   calculatePrint(' - ');
// });
// oneBtn.addEventListener('click', () => {
//   calculatePrint('1');
// });
// twoBtn.addEventListener('click', () => {
//   calculatePrint('2');
// });
// threeBtn.addEventListener('click', () => {
//   calculatePrint('3');
// });
// plusBtn.addEventListener('click', () => {
//   calculatePrint(' + ');
// });
// zeroBtn.addEventListener('click', () => {
//   calculatePrint('0');
// });
// dotBtn.addEventListener('click', () => {
//   calculatePrint('.');
// });
// equationBtn.addEventListener('click', () => {
//   calculate();
// });

// let resultNumberString = '';
// let resultNumber = 0;
// function calculatePrint(num)
// {
//   resultNumberString += num;
//   console.log(resultNumberString);
// }

// function calculate()
// {
//   resultNumber = Number(resultNumberString);
//   calculatePrint(` = ${resultNumber}`);
//   // console.log(resultNumber);
// }

const topPanle = document.querySelector('.js-top-panle');
const buttons = document.querySelectorAll('button');

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    calculate(button);
  })
})

let calculation = [];

function calculate(button)
{
  const buttonValue = button.textContent;
  
  calculation.push(buttonValue);
  
  console.log(calculation);
}