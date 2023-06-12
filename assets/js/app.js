let cpfCorrect = [
    {
        cpf: "11122233344",
        name: "Maria Fernandes de Souza"
    },
    {
        cpf: "44433322211",
        name: "Jaimes Rodriguez Cunha"
    }
];

let msgError = "";

const inputValue = document.querySelector(".main-include--input");
const mainInclude = document.querySelector(".main-include--number");

document.querySelector(".main-include--button").addEventListener("click", checkInput);

document.querySelector(".button-send").addEventListener("click", resetAll);

function checkInput(e){
    e.preventDefault();

    const inputCPF = inputValue.value;

    if(inputCPF === "" || inputCPF.length < 11){
        msgError = "Por favor, preencha o campo corretamente!"
        showCard(msgError);
        setTimeout(removeCard, 3000)
    }else{
        seeCorrect(inputCPF);
    }
}

function showCard(msgError){
    document.querySelector(".card-error").classList.add("show");
    document.querySelector(".card-msg").innerHTML = msgError;
}

function removeCard(){
    document.querySelector(".card-error").classList.remove("show");
}

function seeCorrect(checkCPF){
    let foundPerson = cpfCorrect.find(person => person.cpf === checkCPF);

    if(foundPerson){
        let steps = document.querySelectorAll(".step");
        for(let i = 0; i < steps.length; i++){
            steps[i].style.display = "block";
        }

        document.querySelector(".name-person").innerHTML = foundPerson.name;
    }else{
        msgError = "CPF inválido, tente novamente!"
        showCard(msgError);
        setTimeout(removeCard, 3000)
    }
}

function resetAll(){
    inputValue.value = "";
    let steps = document.querySelectorAll(".step");
        
    for(let i = 0; i < steps.length; i++){
        steps[i].style.display = "none";
    }
}

function limitHeight(input, maxHeigth){
    if(input.value.length > maxHeigth){
        input.value = input.value.slice(0, maxHeigth);
    }
}