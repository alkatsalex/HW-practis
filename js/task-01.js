const categories = document.querySelectorAll('.item')
console.log('Number of categories:', categories.length);

categories.forEach(element => {
    const title = element.firstElementChild
    console.log('Category:', title.textContent)
    
   const list = element.querySelectorAll('li')
   console.log('Elements:', list.length)
});

