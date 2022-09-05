let button = document.getElementById('button-simular');
button.addEventListener('click', obtener_datos);  

let tasa_dolar;
let tasa_dolar_destino;
let monto;
let m_indolar;
let m_final;
let input_m_final;

function obtener_datos(){
    tasa_dolar = document.getElementById('moneda-inicial').options[document.getElementById('moneda-inicial').selectedIndex].dataset.valor;

    tasa_dolar_destino = document.getElementById('moneda-destino').options[document.getElementById('moneda-destino').selectedIndex].dataset.valor;

    input_m_final = document.getElementById('monto-final')
    
    monto = parseFloat(document.getElementById('input-monto').value); 

    m_indolar = monto / tasa_dolar;

    m_final = m_indolar * tasa_dolar_destino;

    input_m_final.innerHTML=m_final.toFixed(4);
}

function change_top(src){
    document.getElementById("icon-top").src=src
   }

function change_bottom(src){
    document.getElementById("icon-bottom").src=src
}