const button = document.getElementById("button");

button.addEventListener("click", () => {
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");
  const planeta = document.getElementById("planeta").value;

  switch (planeta) {
    case "mercurio":
      resultado.innerHTML = ((peso / 9.81) * 3.7).toFixed(2) + " kg mercurianos";
      break;

    case "venus":
      resultado.innerHTML = ((peso / 9.81) * 8.87).toFixed(2) + " kg venusianos";
      break;
   
    case "marte":
      resultado.innerHTML = ((peso / 9.81) * 3.711).toFixed(2) + " kg marteanos";
      break;

    case "saturno":
      resultado.innerHTML = ((peso / 9.81) * 10.44).toFixed(2) + " kg saturnianos";
      break;
    
    case "urano":
      resultado.innerHTML = ((peso / 9.81) * 8.87).toFixed(2) + " kg uranianos";
      break;

    case "neptuno":
      resultado.innerHTML = ((peso / 9.81) * 11.15).toFixed(2) + " kg neptunianos";
      break;

    case "jupiter":
      resultado.innerHTML = ((peso / 9.81) * 24.79).toFixed(2) + " kg jupiterianos";
      break;

      default:
        resultado.innerHTML = "Seleccione un planeta";
  }
});
