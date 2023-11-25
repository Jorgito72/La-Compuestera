const montoInicial= document.getElementById("capital");
const tasaPorPeriodo= document.getElementById("imputTasaPeriodo");
const periodos= document.getElementById("imputCantPeriodos");
let interesesObtenidos = 0;
let montoFinal = 0;

function calcularInteresCompuesto() {
var tasaPorcentaje = parseFloat(tasaPorPeriodo.value) / 100;
 var resultado = parseFloat(montoInicial.value) * Math.pow((1 + tasaPorcentaje), parseFloat(periodos.value));
 var interesCompuesto = resultado - montoInicial.value;
 
  // Aplicar estilos a las variables antes de mostrarlas
  var resultadoStyled = `<span style="font-weight: bold; text-decoration: underline;">${resultado.toFixed(2)}</span>`;
  var interesCompuestoStyled = `<span style="font-weight: bold; text-decoration: underline;">${interesCompuesto.toFixed(2)}</span>`;

  // Mostrar el resultado
  document.getElementById('montoFinal').innerHTML = 'El resultado del interés compuesto es: ' + resultadoStyled;
  document.getElementById('intereses').innerHTML = 'El interés obtenido es: ' + interesCompuestoStyled;
}