const frm = document.querySelector("form")
const inputUser = document.querySelector('.center_user')
const inputSenha = document.querySelector('.center_senha')
const button = document.querySelector('.login_button');
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
    if(target.value.length > 2 && abrirBotao > 0){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

frm.addEventListener("submit", (e) => {

    const usuario = frm.inUser.value
    const senha = frm.inSenha.value

    if (usuario == "admin" && senha == "admin") {
        location.href="../pages/menu.html"
    } else {
        avisoErro.innerText = `Usuario e/ou senha incorreta. Resta mais ${3 - cont} tentativas.`
        cont++
        if (cont > 3) {
            alert("Muitas tentativas no momento, conta suspensa por 10 minutos")
            avisoErro.innerText = ""
        }
    }

    e.preventDefault()
})

inputUser.addEventListener('input', validateInput1);
inputSenha.addEventListener('input', validateInput2);
