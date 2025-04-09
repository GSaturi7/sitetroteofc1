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

function calcularPontuacao() {
  let mascote = parseInt(document.getElementById("mascote").value) || 0;
  let atleta = parseInt(document.getElementById("atleta").value) || 0;
  let leite = parseInt(document.getElementById("leite").value) || 0;
  let sangue = parseInt(document.getElementById("sangue").value) || 0;
  let kit = parseInt(document.getElementById("kit").value) || 0;
  let suplementos = parseInt(document.getElementById("suplementos").value) || 0;

  let soma = mascote + atleta + (2 * leite);
  document.getElementById("resultado").innerText = "A pontuação da equipe é: " + soma;
}
if(equipe == "Laranja"){
    // verifica kit e suplemento
    if(kit >= 97 && suplementos >= 49){
        soma = soma + 5000 + ((kit - 97) * 30) + ((suplementos - 49) * 15)
    }
    else if(kit >= 78 && suplementos >= 39){
        soma = soma + 4000 + ((kit - 78) * 30) + ((suplementos - 39) * 15)
    }
    else if(kit >= 49 && suplementos >= 25){
        soma = soma + 2500 + ((kit - 49) * 30) + ((suplementos - 25) * 15)
    }
    else if(kit >= 19 && suplementos >= 10){
        soma = soma + 1000 + ((kit - 19) * 30) + ((suplementos - 10) * 15)
    }
if(sangue >= 49){
    soma = soma + 2500 
}
else{
    soma = soma + (sangue * 20)
}
}
if(equipe == "Preta"){
    // verifica kit e suplemento
    if(kit >= 97 && suplementos >= 49){
        soma = soma + 5000 + ((kit - 97) * 30) + ((suplementos - 49) * 15)
    }
    else if(kit >= 78 && suplementos >= 39){
        soma = soma + 4000 + ((kit - 78) * 30) + ((suplementos - 39) * 15)
    }
    else if(kit >= 49 && suplementos >= 25){
        soma = soma + 2500 + ((kit - 49) * 30) + ((suplementos - 25) * 15)
    }
    else if(kit >= 19 && suplementos >= 10){
        soma = soma + 1000 + ((kit - 19) * 30) + ((suplementos - 10) * 15)
    }
if(sangue >= 49){
    soma = soma + 2500 
}
else{
    soma = soma + (sangue * 20)
}
}