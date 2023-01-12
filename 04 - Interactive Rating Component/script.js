const options = document.querySelectorAll('li button');
const button = document.querySelector('.btn-submit')
const buttonAgain = document.getElementById('rate-again')
let optionSelected;

const container = document.querySelector('.container');
const container2 = document.querySelector('.thank-you');

console.log(options);

function selectOption(e){
    if (optionSelected != undefined){
        options[optionSelected - 1].classList.remove("active");
    }

    e.target.classList.add("active");
    optionSelected = Number(e.target.innerText);
    
}


options.forEach(function(option){
    option.addEventListener('click', selectOption)
    
})


//Enviar 

function newSubmit () {

    if(optionSelected !== undefined){
        container.classList.add('hidden');
        container2.classList.remove('hidden');
        document.getElementById('option-selected').innerText = optionSelected;
    } else {
        alert('Error... Escolha uma opção!')
    }
    
   
}

button.addEventListener('click', newSubmit);


//Retornar

function againSubmit (){
    container.classList.remove('hidden');
    container2.classList.add('hidden')
    
    options.forEach(function(e){
        e.classList.remove('active')
        
    })

    optionSelected = undefined;
}

buttonAgain.addEventListener('click', againSubmit)