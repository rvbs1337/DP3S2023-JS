function atualizarModelos() {
    var selectMarca = document.getElementById("inMarca")
    var selectModelo = document.getElementById("inModelo")
    var marcaSelecionada = selectMarca.value

    selectModelo.innerHTML = ""

    if (marcaSelecionada === "nada") {
        adicionarOpcao(selectModelo, "-------------------------------Selecione um Modelo---------------------------------")

    } else if (marcaSelecionada === "Chevrolet") {

        adicionarOpcao(selectModelo, "Astra")
        adicionarOpcao(selectModelo, "Blazer")
        adicionarOpcao(selectModelo, "Classic")
        adicionarOpcao(selectModelo, "Cobalt")
        adicionarOpcao(selectModelo, "Corsa")
        adicionarOpcao(selectModelo, "Cruze")
        adicionarOpcao(selectModelo, "D-20")
        adicionarOpcao(selectModelo, "Montana")
        adicionarOpcao(selectModelo, "Omega")
        adicionarOpcao(selectModelo, "Onix")
        adicionarOpcao(selectModelo, "Prisma")
        adicionarOpcao(selectModelo, "S10")
        adicionarOpcao(selectModelo, "Spin")
        adicionarOpcao(selectModelo, "Zafira")

    } else if (marcaSelecionada === "Citroen") {

        adicionarOpcao(selectModelo, "Aircross")
        adicionarOpcao(selectModelo, "Jumper")
        adicionarOpcao(selectModelo, "Jumpy")

    } else if (marcaSelecionada === "Fiat") {

        adicionarOpcao(selectModelo, "Cargo")
        adicionarOpcao(selectModelo, "Doblo")
        adicionarOpcao(selectModelo, "Fiorino")
        adicionarOpcao(selectModelo, "Multijet")
        adicionarOpcao(selectModelo, "Palio")
        adicionarOpcao(selectModelo, "Strada")
        adicionarOpcao(selectModelo, "Uno")

    } else if (marcaSelecionada === "Honda") {

        adicionarOpcao(selectModelo, "XRE300")
        adicionarOpcao(selectModelo, "CG125")

    } else if (marcaSelecionada === "Jeep") {

        adicionarOpcao(selectModelo, "Renegade")

    } else if (marcaSelecionada === "Kia") {

        adicionarOpcao(selectModelo, "Besta")

    } else if (marcaSelecionada === "Peugeot") {

        adicionarOpcao(selectModelo, "207")
        adicionarOpcao(selectModelo, "Boxer")
        adicionarOpcao(selectModelo, "Partner")

    } else if (marcaSelecionada === "Renault") {

        adicionarOpcao(selectModelo, "Duster")
        adicionarOpcao(selectModelo, "Kangoo")
        adicionarOpcao(selectModelo, "Kwid")
        adicionarOpcao(selectModelo, "Logan")
        adicionarOpcao(selectModelo, "Master")

    } else if (marcaSelecionada === "Toyota") {

        adicionarOpcao(selectModelo, "Bandeirantes")
        adicionarOpcao(selectModelo, "Hilux")
        adicionarOpcao(selectModelo, "Hilux SW4")

    } else if (marcaSelecionada === "Volkswagen") {

        adicionarOpcao(selectModelo, "Gol")
        adicionarOpcao(selectModelo, "Kombi")
        adicionarOpcao(selectModelo, "Parati")
        adicionarOpcao(selectModelo, "Saveiro")
        adicionarOpcao(selectModelo, "Voyage")
    }



    function adicionarOpcao(select, texto) {
        var option = document.createElement("option");
        option.text = texto;
        select.add(option);
    }
}

// Seletor dos campos de entrada
var camposDeEntrada = document.querySelectorAll("input, select");

// Função para verificar o preenchimento dos campos
function verificarCamposPreenchidos() {
  var todosPreenchidos = true;

  // Verifica se algum campo está vazio
  camposDeEntrada.forEach(function (campo) {
    if (campo.value.trim() === "") {
      todosPreenchidos = false;
    }
  });

  // Habilita ou desabilita o botão de envio
  var botaoSubmit = document.querySelector(".register_button");
  botaoSubmit.disabled = !todosPreenchidos;
}

// Adiciona eventos input/change aos campos de entrada
camposDeEntrada.forEach(function (campo) {
  campo.addEventListener("input", verificarCamposPreenchidos);
  campo.addEventListener("change", verificarCamposPreenchidos);
});

