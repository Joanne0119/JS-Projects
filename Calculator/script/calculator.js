const topPanle = document.querySelector('.js-top-panle');
const recordPanle = document.querySelector('.js-record-panle');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

console.log(numberButtons);
console.log(operatorButtons);

let calculation = [];
let newCalculation = '';
let newCalculationArrary = [];
let newOperator;

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculate(button);
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    operation(button.value);
  })
})

showOnTopPanle();

function calculate(button)
{
  const buttonValue = button.value;
  
  calculation.push(buttonValue);

  GenNewCalculation();
  showOnTopPanle();
  console.log(calculation);
}

function operation (operator)
{
  newCalculationArrary.push(newCalculation);
  newCalculation = 0;
  calculation = [];
  newCalculationArrary.push(operator);
  showOnRecordPanle();
}

function GenNewCalculation ()
{
  newCalculation = '';

  calculation.forEach((value, index) => {
    console.log(value);
    console.log(index);
    newCalculation = newCalculation + value;
    console.log(newCalculation);
  })

}

function showOnRecordPanle()
{
  let message = showNewCalculationArrary();
  recordPanle.innerHTML = message;
}

function showOnTopPanle ()
{
  topPanle.innerHTML = newCalculation;
}


const acBtn = document.querySelector('.js-ac-btn');
const negtivePostiveBtn = document.querySelector('.js-negtive-postive-btn');
const percentBtn = document.querySelector('.js-percent-btn');
const equationBtn = document.querySelector('.js-equation-btn');


acBtn.addEventListener('click', () => {
  clear();
});
negtivePostiveBtn.addEventListener('click', () => {
  negtivePostive();
});
percentBtn.addEventListener('click', () => {
  percent();
});
equationBtn.addEventListener('click', () => {
  equation();
});

function clear()
{
  topPanle.innerHTML = '';
  recordPanle.innerHTML = '';
  calculation = [];
  newCalculationArrary = [];
  newCalculation = 0;
}

function negtivePostive()
{
  if(newCalculation > 0)
  {
    newCalculation *= -1;
    calculation.splice(0, 0, '-');
  } 
  else {
    newCalculation *= -1;
    calculation.splice(0, 1);
  }
  showOnTopPanle();
  console.log(calculation);
}

function percent ()
{
  newCalculation *= 0.01;
  
  showOnTopPanle();
  console.log(calculation);
}

function equation()
{
  newCalculationArrary.push(newCalculation);

  recordPanle.innerHTML = '';
  console.log(newCalculationArrary[0]);

  newCalculation = eval(showNewCalculationArrary());
  console.log(newCalculation);
  showOnTopPanle();
  console.log(calculation);
  newCalculationArrary = [];
  calculation = [];
}

function showNewCalculationArrary()
{
  let newMessage = '';
  for(let i = 0; i < newCalculationArrary.length; i++)
  {
    newMessage += newCalculationArrary[i];
  }
  return newMessage;
}
