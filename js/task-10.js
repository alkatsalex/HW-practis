function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elem = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]')
}



function createBoxes(amount) {
const startStep = 30
  let marckup =[]

  for (let i = 0; i < amount * 10; i += 10) {
  
    marckup.push(`<div
    style="background-color:${getRandomHexColor()};
    width:${startStep + i}px;
    height:${startStep + i}px;">
    </div>`)
    
  }
 const maerckupH = marckup.join("")
return maerckupH
}




elem.btnCreate.addEventListener('click', ()=> {
  // elem.boxes.insertAdjacentHTML("beforeend", createBoxes(elem.input.value))
  elem.boxes.innerHTML = createBoxes(elem.input.value)
})

elem.btnDestroy.addEventListener('click',()=>{
  elem.boxes.innerHTML = ''
  elem.input.value = 0
})