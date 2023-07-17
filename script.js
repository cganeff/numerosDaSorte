const numbersMega = document.querySelectorAll(".numberMega");
const generateBtnMega = document.querySelector("#generateMega");
const numbersQuina = document.querySelectorAll(".numberQuina");
const generateBtnQuina = document.querySelector("#generateQuina");

function generateNumbersMega() {
  const max = 60;
  const min = 1;
  const result = []

  while(result.length < 6) {

    const numberMega = Math.floor(Math.random() * (max - min + 1)) + min;

    if(!result.includes(numberMega)) {
      result.push(numberMega);
    }
  }

  for(let i = 0; i < numbersMega.length; i++) {
    numbersMega[i].textContent = result[i];
  }
}

generateBtnMega.addEventListener("click", generateNumbersMega);

function generateNumbersQuina() {
    const max = 80;
    const min = 1;
    const result = []
  
    while(result.length < 5) {
  
      const numberQuina = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if(!result.includes(numberQuina)) {
        result.push(numberQuina);
      }
    }
  
    for(let i = 0; i < numbersMega.length; i++) {
      numbersQuina[i].textContent = result[i];
    }
  }
  
  generateBtnQuina.addEventListener("click", generateNumbersQuina);