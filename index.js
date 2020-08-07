const Vehiculo = require('./clases')
const lista = require('./json')

//INSTANCIANDO A PARTIR DE LA LISTA DE VEHICULOS
let listaVehiculos = JSON.parse(lista)
let vehiculos = []
listaVehiculos.forEach((element, i=0) => {
    vehiculos[i] = new Vehiculo(listaVehiculos[i])
});

// MOSTRANDO LOS VEHICULOS
for (let i = 0; i < vehiculos.length; i++) {
    if(vehiculos[i].puertas){
        console.log(`
                Marca: ${vehiculos[i].marca} // Modelo: ${vehiculos[i].modelo} // Puertas: ${vehiculos[i].puertas} // Precio: $${vehiculos[i].obtenerPrecio()}     
            `)
    }
    if(vehiculos[i].cilindrada){
        console.log(`
                Marca: ${vehiculos[i].marca} // Modelo: ${vehiculos[i].modelo} // Cilindrada: ${vehiculos[i].cilindrada} // Precio: $${vehiculos[i].obtenerPrecio()}     
            `)
    }
}

console.log('=========================================')

let precios = []
for (let i = 0; i < vehiculos.length; i++) {
    precios[i] = vehiculos[i].precio
}

//VEHICULO MÁS CARO
for (let i = 0; i < vehiculos.length; i++) {
    if(Math.max(...precios) == vehiculos[i].precio) {
            console.log(`Vehículo más caro: ${vehiculos[i].marca} ${vehiculos[i].modelo}`)
    }
}

// VEHICULO MÁS BARATO
for (let i = 0; i < vehiculos.length; i++) {
    if(Math.min(...precios) == vehiculos[i].precio) {
            console.log(`Vehículo más barato: ${vehiculos[i].marca} ${vehiculos[i].modelo}`)
    }
}

// MODELO LETRO Y
for (let i = 0; i < vehiculos.length; i++) {
    if(vehiculos[i].modelo.includes('Y') || vehiculos[i].modelo.includes('y') ){
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculos[i].marca} ${vehiculos[i].modelo} $${vehiculos[i].obtenerPrecio()}`)
    }
}


console.log('==========================================')

// VEHICULOS ORDENADOS POR PRECIO

let preciosOrdenados = precios.sort((x,y)=>{
    return y - x
})

console.log(`Vehículos ordenados por precio de mayor a menor:`)
for (let i = 0; i < preciosOrdenados.length; i++) {
    for (let x = 0; x < vehiculos.length; x++) {
        if(preciosOrdenados[i] == vehiculos[x].precio){
            console.log(`${vehiculos[x].marca} ${vehiculos[x].modelo}`)
        }
    }
}