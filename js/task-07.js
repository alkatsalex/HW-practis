const elem ={
    "fontSizeControl": document.querySelector('#font-size-control'),
    "text": document.querySelector('#text')
}

elem.fontSizeControl.addEventListener('input', () => {
    elem.text.style.fontSize = `${elem.fontSizeControl.value}px`
})