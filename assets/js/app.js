const CantidadIngresada = document.getElementById ("CantidadIngresada")
const ColorIngresado = document.getElementById("ColorIngresado")
const BotonCalcular = document.getElementById("BotonCalcular")
var TotalFinal = document.getElementById("TotalFinal")
var CantidadFinal = document.getElementById("CantidadFinal")
var ColorFinal = document.getElementById("ColorFinal")
var MensajeError = document.getElementById("MensajeError")

BotonCalcular.addEventListener("click", () => {
    if (parseFloat(CantidadIngresada.value) > 0){
        var TotalFinalFormula = () => {
            CantidadIngresada.innerHTML 
        }
        TotalFinal.innerHTML = (parseFloat(CantidadIngresada.value) * 400000)
        CantidadFinal.innerHTML = parseFloat(CantidadIngresada.value)
        ColorFinal.style.backgroundColor = ColorIngresado.value
    }else{
        MensajeError.innerHTML = "Favor Ingresa un número mayor a 0*"
    }
})