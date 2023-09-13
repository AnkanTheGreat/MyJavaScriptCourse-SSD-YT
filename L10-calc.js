let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(sign){
calculation += sign;
displayCalculation();
localStorage.setItem('calc', calculation);

}  

function displayCalculation(){
document.querySelector('.js-calculation')
.innerHTML = calculation;
localStorage.setItem('calc', calculation);
}
