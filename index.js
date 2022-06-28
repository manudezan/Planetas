const button = document.getElementById("button");
const body =  document.getElementById("body");
const planeta = document.getElementById("planeta");

planeta.addEventListener("change", cambios) 
button.addEventListener("click", cambios)

function cambios() {
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");
  const planeta = document.getElementById("planeta").value;

  switch (planeta) {
    case "mercurio":
      resultado.innerHTML = ((peso / 9.81) * 3.7).toFixed(2) + " kg mercurianos";
      Object.assign(body.style, {
        backgroundImage: "linear-gradient(to left top, #b08968, #b48e66, #b89265, #bb9863, #bd9d62, #c19f67, #c6a26d, #caa472, #cfa480, #d0a68e, #cea99b, #c9ada7)",
      });
        break;

    case "venus":
      resultado.innerHTML = ((peso / 9.81) * 8.87).toFixed(2) + " kg venusianos";
      Object.assign(body.style, {
        backgroundImage: "linear-gradient(to left top, #a76334, #b77031, #c57f2c, #d18e26, #db9f1c, #dca116, #dda20d, #dea401, #d89601, #d28903, #cb7c06, #c36f09)",
      });
      break;
   
    case "marte":
      resultado.innerHTML = ((peso / 9.81) * 3.711).toFixed(2) + " kg marteanos";
      Object.assign(body.style, {
      backgroundImage: "linear-gradient(to left top, #8f250c, #922a0a, #953008, #983505, #9b3a03, #a44507, #ae4f0d, #b75a13, #c96d21, #db812e, #ed953c, #ffa94a)",
    });
      break;

    case "saturno":
      resultado.innerHTML = ((peso / 9.81) * 10.44).toFixed(2) + " kg saturnianos";
      Object.assign(body.style, {
        backgroundImage: "linear-gradient(to left top, #8c7d6d, #998773, #a7907a, #b59a80, #c3a487, #c6a78a, #c9aa8e, #ccad91, #c5aa91, #bda792, #b6a492, #afa193)",      
      });
      break;
    
    case "urano":
      resultado.innerHTML = ((peso / 9.81) * 8.87).toFixed(2) + " kg uranianos";
      Object.assign(body.style, {
        backgroundImage: "linear-gradient(to left top, #4aaea1, #48b4a8, #46b9b0, #44bfb7, #41c5bf, #30c6ca, #1bc6d5, #00c6df, #00bfec, #1eb7f6, #51acfb, #7aa0f8)",
      });
        break;

    case "neptuno":
      resultado.innerHTML = ((peso / 9.81) * 11.15).toFixed(2) + " kg neptunianos";
      Object.assign(body.style, {
        backgroundImage: "linear-gradient(to left top, #084db7, #005bbc, #0068bf, #0075c0, #0080c0, #0483c1, #0a86c3, #1089c4, #0085c9, #0081cd, #007cd0, #0b77d3)",      
      });
      break;

    case "jupiter":
      resultado.innerHTML = ((peso / 9.81) * 24.79).toFixed(2) + " kg jupiterianos";
      Object.assign(body.style, {
        backgroundImage: "linear-gradient(to left top, #978a7d, #a6927e, #b5997e, #c4a17f, #d4a880, #d1a57d, #cfa37b, #cca078, #b79371, #a3866a, #8f7963, #7c6c5c)",  
      });
      break;

      default:
        resultado.innerHTML = "Seleccione un planeta";
  }
};
