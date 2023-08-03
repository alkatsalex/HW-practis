const counter = {
    value: 0,
    decrement() {
    this.value -= 1
    },
    increment() {
        this.value += 1
        }
}

const counterEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]')



btnDecrement.addEventListener('click',  noBtnDecrement)

function noBtnDecrement() {
counter.decrement()
counterEl.textContent = counter.value
}

btnIncrement.addEventListener('click',  noBtnIncrement)

function noBtnIncrement() {
    counter.increment()
    counterEl.textContent = counter.value
    }

    