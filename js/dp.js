const frm = document.querySelector("form")
let cont = 0


frm.addEventListener("submit", (e) => {


    const usuario = frm.inUser.value
    const senha = frm.inSenha.value

    if (usuario == "admin" && senha == "admin") {
        alert("Bem vindo, Administrador!")
        location.href="../pages/menu.html"
    } else {
        avisoErro.innerText = "Usuario e/ou senha incorreta"
        cont++
        if (cont > 3) {
            alert("Muitas tentativas no momento, conta suspensa por 10 minutos")
        }
    }



    e.preventDefault()
})