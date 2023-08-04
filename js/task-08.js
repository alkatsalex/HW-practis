const elem = {
    "form": document.querySelector('.login-form'),
    "btnSubmit": document.querySelector('button')
}

const data = {
    email: "",
    password: ""
 }

elem.form.addEventListener('submit', (event)=>{
    event.preventDefault()
const {
    elements: {email, password}
} = event.currentTarget

if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!")
} else {

   data.email = email.value,
   data.password = password.value
   console.log(data);
    event.currentTarget.reset()

}
} )
