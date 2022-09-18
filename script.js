class Libro{

    constructor(nombre, autor, precio){
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.comprado = false;
    }

    comprar(){
        this.comprado = true;
    }

}

let libro1 = new Libro("El Camino de los Reyes", "Brandon Sanderson", 7000)
let libro2 = new Libro("Palabras Radiantes", "Brandon Sanderson", 7000)
let libro3 = new Libro("Ritmo de Guerra", "Brandon Sanderson", 7000)
let libro4 = new Libro("Juramentada", "Brandon Sanderson", 7000)
let libro5 = new Libro("Mistborn 1", "Brandon Sanderson", 5000)
let libro6 = new Libro("Mistborn 2", "Brandon Sanderson", 5500)
let libro7 = new Libro("Mistborn 3", "Brandon Sanderson", 5500)
let libro8 = new Libro("El Nombre del Viento", "Patrick Rothfuss", 5500)
let libro9 = new Libro("El Temor de un Hombre Sabio", "Patrick Rothfuss", 5500)

arrLibros = [];

arrLibros.push(libro1)
arrLibros.push(libro2)
arrLibros.push(libro3)
arrLibros.push(libro4)
arrLibros.push(libro5)
arrLibros.push(libro6)
arrLibros.push(libro7)
arrLibros.push(libro8)
arrLibros.push(libro9)

console.log("Bienvenido a la tienda de libros! estos son los productos dispobiles:")

for(i = 0; i<arrLibros.length(); i++){
    console.log(`${i+1} -> ${arrLibros[i].nombre} - ${arrLibros[i].autor} | $${arrLibros[i].precio}`)
}

