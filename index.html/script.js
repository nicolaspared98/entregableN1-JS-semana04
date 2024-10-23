
const mascotas = []
function mostrarMascotas(){
    let ListaMascotas = "Los turnos son:"
    let i = 0
    for(mascota of mascotas){
    i++
     ListaMascotas += `\n ${i} - ${mascota}`

    }
    alert (ListaMascotas)
 }
function agregarMascota(){
    let nombre = prompt("Ingrese el nombre de la mascota :")

        mascotas.push(nombre)
        mostrarMascotas()

 
}
function dejarPasarMascota(){
    let primerMascota = mascotas.unshift()
    if(mascotas.length === 0){
        alert(`Por favor, que pase la mascota ${primerMascota}`)
    } else {
        alert(`Por favor, que pase la mascota ${primerMascota} y que se vaya preparando ${mascotas[0]}`)
        mostrarMascotas()
    }
}
const EncontrarMascota = (nombre)=> {
    const indiceMascota = mascotas.indexOf(nombre)
    alert (`Encontramos su nombre en el orden ${indiceMascota+1} en la lista`) 
}
function seleccionarOpcion(opcion){
    switch(opcion){
        case 1:
            agregarMascota()
            break;
        case 2:
            dejarPasarMascota();
            break;
        case 3:
            const nombreMascota = prompt("Ingre el nombre de la mascota")
            EncontrarMascota(nombreMascota);
            break;
        case 4:
            alert("No se realizo nada")
        default:
            alert("Se ingreso un dato no valido")
    }

}
function app(){
    let loop = true
    alert("Bienvenidos")
    while (loop){
        let opcion = parseInt(prompt("Operaciones a realizar: \n 1 - Agregar Mascota \n 2 - Dejar Pasar Mascota \n 3 - Buscar En La Lista A La Mascota \n 4 - Nada"))
        seleccionarOpcion(opcion)
        loop = confirm("Desea seguir realizando operaciones?")
    }
    alert ("Hasta la proxima , que tenga un lindo dia")
 
}
app()

