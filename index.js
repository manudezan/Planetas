const button = document.getElementById('button');     
           
        button.addEventListener('click', () => {
            const peso = document.getElementById('peso').value;
            const resultado = document.getElementById('resultado');

            resultado.innerHTML = ((peso/9.81)*3.711).toFixed(2) + " kg marteanos";

        })