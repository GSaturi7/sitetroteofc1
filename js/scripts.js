function mudarCor() {
  let corSelecionada = document.getElementById("cor").value;
  let container = document.querySelector(".container");

  if (corSelecionada === "laranja") {
      container.style.backgroundColor = "rgb(247, 141, 3)"; 
      container.style.color = "black"; // Mantém texto preto
  } else if (corSelecionada === "preta") {
      container.style.backgroundColor = "#000000";
      container.style.color = "white"; // Texto branco para contraste
  } else if (corSelecionada === "roxa") {
      container.style.backgroundColor = "rgb(199, 74, 199)";
      container.style.color = "black";
  } else if (corSelecionada === "verde") {
      container.style.backgroundColor = "rgb(50, 179, 50)";
      container.style.color = "black";
  } else if (corSelecionada === "vermelha") {
      container.style.backgroundColor = "rgb(221, 66, 66)";
      container.style.color = "black";
  }
}

function calcular() {
    // vamos criar 2 variáveis 
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue;

    // recupera os valores digitados pelo usuário
    mascote = Number(document.getElementById("mascote").value);
    homenagem = Number(document.getElementById("homenagem").value);
    leite = Number(document.getElementById("leite").value);
    kit = Number(document.getElementById("kit").value);
    suplemento = Number(document.getElementById("suplemento").value);
    sangue = Number(document.getElementById("sangue").value);

    // calcular a soma parcial
    soma = mascote + homenagem + (2 * leite);

    if (equipe == "laranja") {
        if (kit >= 97 && suplemento >= 49) {
            soma += 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if (kit >= 78 && suplemento >= 39) {
            soma += 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 && suplemento >= 25) {
            soma += 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 && suplemento >= 10) {
            soma += 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        }

        if (sangue >= 49) {
            soma += 2500 + ((sangue - 49) * 20);
        } else {
            soma += sangue * 20;
        }
    }

    if (equipe == "preta") {
        if (kit >= 103 && suplemento >= 52) {
            soma += 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);
        } else if (kit >= 82 && suplemento >= 42) {
            soma += 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if (kit >= 52 && suplemento >= 26) {
            soma += 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 21 && suplemento >= 10) {
            soma += 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15);
        }

        if (sangue >= 52) {
            soma += 2500;
        } else {
            soma += sangue * 20;
        }
    }

    if (equipe == "roxa") {
        if (kit >= 102 && suplemento >= 51) {
            soma += 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);
        } else if (kit >= 82 && suplemento >= 41) {
            soma += 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15);
        } else if (kit >= 51 && suplemento >= 26) {
            soma += 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 20 && suplemento >= 10) {
            soma += 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15);
        }

        if (sangue >= 51) {
            soma += 2500;
        } else {
            soma += sangue * 20;
        }
    }

    if (equipe == "verde") {
        if (kit >= 88 && suplemento >= 44) {
            soma += 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);
        } else if (kit >= 70 && suplemento >= 35) {
            soma += 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if (kit >= 44 && suplemento >= 22) {
            soma += 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15);
        } else if (kit >= 18 && suplemento >= 9) {
            soma += 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15);
        }

        if (sangue >= 44) {
            soma += 2500;
        } else {
            soma += sangue * 20;
        }
    }

    if (equipe == "vermelha") {
        if (kit >= 93 && suplemento >= 47) {
            soma += 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);
        } else if (kit >= 74 && suplemento >= 38) {
            soma += 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if (kit >= 47 && suplemento >= 24) {
            soma += 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if (kit >= 19 && suplemento >= 9) {
            soma += 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15);
        }

        if (sangue >= 47) {
            soma += 2500;
        } else {
            soma += sangue * 20;
        }
    }

    // retorna o valor ao HTML
    document.getElementById("soma").innerHTML = `A soma é ${soma}`;
}
