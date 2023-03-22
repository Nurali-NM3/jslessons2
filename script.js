const input = document.querySelector('#input')
const buttonPluse = document.querySelector('#btn-pluse')
const buttonMinuse = document.querySelector('#btn-minuse')
const result = document.querySelector("#result")
const buttonMultipls = document.querySelector('#btn-multilps')

let num =0
result.innerText = num
buttonPluse.addEventListener('click', () =>{
    if(num <100){
        num +=1
        result.innerText = num


    }else {
        // alert('error')
        buttonPluse.disabled = true
    }


})
buttonMinuse.addEventListener('click', () =>{
if(num >0){
    num -=1
    result.innerText = num
    buttonPluse.disabled = false
}else {
    alert('error')
}


})
buttonMultipls.addEventListener('click', () =>{
    if(num >0 && num < 100){
        num *=2
        result.innerText = num
        buttonPluse.disabled = false
    }else {
        alert('error')
    }


})
input.addEventListener('input', (event) =>{

})

