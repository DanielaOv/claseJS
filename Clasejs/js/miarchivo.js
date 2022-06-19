function  calculo(){
    let nombre = prompt("Ingresa tu nombre");
    let modo = prompt("Corriste o Caminaste?");
    let kilometros = prompt("Cuántos kilómetros?");
    let camina = (kilometros*46.22);
    let corre = (kilometros*67.9);

    alert(nombre + " si caminaste consumiste: " + camina + " calorías");
    alert(nombre + " si corriste consumiste: " + corre + " calorías");
    alert("Gracias por confiar!")
}
const panels = document.querySelectorAll('.panel');

        function toggleOpen(){
            this.classList.toggle('open');
        }

        function toggleActive(e){
            if(e.propertyName.includes('flex-grow')){
                this.classList.toggle('open-active'); 
            }
        }
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


