class Vehiculo {
    constructor(lista){
            this.marca = lista.marca,
            this.modelo = lista.modelo,
            this.precio = lista.precio,
            this.puertas = lista.puertas,
            this.cilindrada = lista.cilindrada
        };

    obtenerPrecio(){
            var num_parts = this.precio.toFixed(2).toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return num_parts.join(",");
    }
}

module.exports = Vehiculo


