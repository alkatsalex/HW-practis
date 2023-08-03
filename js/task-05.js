const elem = {
    input: document.querySelector('#name-input'),
    text: document.querySelector('#name-output')
}

elem.input.addEventListener('input', onInput)

function onInput(event) {
    elem.text.textContent = event.currentTarget.value
if (event.currentTarget.value ==="") {
    elem.text.textContent = 'Anonymous!'
}

}