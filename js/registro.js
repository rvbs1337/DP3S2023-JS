const frm = document.querySelector("form")
const inputFrota = document.querySelector('.center_frota')
const inputId = document.querySelector('.center_id')
const inputDia = document.querySelector('.center_dia')
const inputHora = document.querySelector('.center_hora')
const button = document.querySelector('.register_button');
let cont = 0
let abrirBotao = 0

const validateInput1 = ({ target }) => {
    if(target.value.length > 2){
        abrirBotao++
    } else {
        button.setAttribute('disabled', '')
    }
}

const validateInput2 = ({ target }) => {
    if(target.value.length > 2){
        abrirBotao++
    } else {
        button.setAttribute('disabled', '')
    }
}

const validateInput3 = ({ target }) => {
    if(target.value.length > 2){
        abrirBotao++
    } else {
        button.setAttribute('disabled', '')
    }
}

const validateInput4 = ({ target }) => {
    if(target.value.length > 2 && abrirBotao > 0){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

frm.addEventListener("submit", (e) => {

    const frota = frm.inFrota.value
    let condFrota = false
    const id = frm.inId.value
    let condId = false
    const dia = frm.inDia.value
    const hora = frm.inHora.value

    if ( frota > 0 & frota < 1000 ) {
        condFrota = true
    }

    if ( id > 0 & id < 1000 ) {
        condId = true
    }

    

    /*if (usuario == "admin" && senha == "admin") {
        location.href="../pages/menu.html"
    } else {
        avisoErro.innerText = `Usuario e/ou senha incorreta. Resta mais ${3 - cont} tentativas.`
        cont++
        if (cont > 3) {
            alert("Muitas tentativas no momento, conta suspensa por 10 minutos")
            avisoErro.innerText = ""
        }
    }*/

    e.preventDefault()
})

let sidebar = document.querySelector('.sidebar')
let sidebarBtn = document.querySelector('.home-content .bx-menu ')
console.log(sidebarBtn)

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close")
}) 

inputFrota.addEventListener('input', validateInput1);
inputId.addEventListener('input', validateInput2);
inputDia.addEventListener('input', validateInput3);
inputHora.addEventListener('input', validateInput4);