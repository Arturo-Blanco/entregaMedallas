let posicion = document.getElementById("posicion");
let btnCalculo = document.getElementById("btnCalculo");

btnCalculo.addEventListener("click", () => {
  let posicionLlegada: number = Number(posicion.value);
  if (posicionLlegada === 1) {
    console.log("Entregar medalla de oro");
  } else {
    if (posicionLlegada === 2) {
      console.log("Entregar medalla de plata");
    } else {
      if (posicionLlegada === 3) {
        console.log("Entregar medalla de bronce");
      } else {
        console.log("Entregar medalla de participacion");
      }
    }
  }
});
