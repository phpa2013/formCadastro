;(function(){
    "use strict"
const inputNome = document.querySelector(".inputNome")
const btnSubmit = document.querySelector(".form-body")
const btn = document.querySelector(".btn")

btnSubmit.addEventListener("submit", function(e){
    e.preventDefault()
    if(!inputNome.value){
        mostrarMsgDeErro("preencha todos os campos", function(){
            inputNome.value = ""
            inputNome.focus()
        })
    }
})

const feedBackMessage = document.querySelector(".feedBackMessage")
const fecharMsg = feedBackMessage.getElementsByTagName("button")[0]

function mostrarMsgDeErro(ele, cb){
    feedBackMessage.classList.add("msgErro")
    feedBackMessage.getElementsByTagName("p")[0].textContent = ele

          
    fecharMsg.focus()
    function fecharMessage(){        
        feedBackMessage.classList.remove("msgErro")
        fecharMsg.removeEventListener("click", fecharMessage)
        fecharMsg.removeEventListener("keyup", fecharComEsc)
        
        if(typeof cb === "function"){
            cb()
        }
        
    }

    function fecharComEsc(e){
        if(e.keyCode === 27){
            fecharMessage()
        }
    }  


fecharMsg.addEventListener("click", fecharMessage)
fecharMsg.addEventListener("keyup", fecharComEsc)

}




const txtArea = document.querySelector("#txtTextArea")
const maximo = txtArea.maxLength 
const contadorContaine = document.querySelector(".contador")
const spanContador = contadorContaine.getElementsByTagName("span")[0]
contadorContaine.style.display = "block"
inserirNumeroSpan(maximo)

function inserirNumeroSpan(n){
    spanContador.textContent = n
}

txtArea.addEventListener("input", function(){
    let letrasDigitadas = txtArea.value.length
    let restantes = Number(maximo) - Number(letrasDigitadas)
    inserirNumeroSpan(restantes)
})

btn.disabled = true
const checkAceito = document.querySelector(".checkAceito")

checkAceito.addEventListener("change", function(){
    btn.disabled = !this.checked    
})

})()