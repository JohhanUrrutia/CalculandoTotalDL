let CantidadIngresada = document.getElementById ("CantidadIngresada")
let ColorIngresado = document.getElementById("ColorIngresado")
let BotonCalcular = document.getElementById("BotonCalcular")
let TotalFinal = document.getElementById("TotalFinal")
let CantidadFinal = document.getElementById("CantidadFinal")
let ColorFinal = document.getElementById("ColorFinal")
let MensajeError = document.getElementById("MensajeError")

BotonCalcular.addEventListener("click", () => {
    if (parseFloat(CantidadIngresada.value) > 0){
        TotalFinal.innerHTML = (parseFloat(CantidadIngresada.value) * 400000)
        CantidadFinal.innerHTML = parseFloat(CantidadIngresada.value)
        ColorFinal.style.backgroundColor = ColorIngresado.value
    }else{
        MensajeError.innerHTML = "Favor Ingresa un número mayor a 0*"
        setTimeout(function(){ MensajeError.innerHTML = "" }, 1500);
    }
})