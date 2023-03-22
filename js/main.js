const crear=document.getElementById('btn_crear')
const navegar=document.getElementById('navegacion')
const tabla=document.getElementById('tabla')
class Agregar{
    constructor(area,nombre,usuario,email,edad){
        this.area=area
        this.nombre=nombre
        this.usuario=usuario
        this.email=email
        this.edad=edad
    }
    buscar(){
        if(navegar.value==this.usuario.value){

        }
    }

}
crear.addEventListener('click', ()=>{
    location.href='../html/index2.html'
})

let informacion= JSON.parse(localStorage.getItem('personas'))
// informacion.value.split('-')

console.log(informacion)


// let fila=document.createElement('tr')

// let area=document.createElement('td')

// let nombre=document.createElement('td')
// let usuario=document.createElement('td')
// let email=document.createElement('td')
// let edad=document.createElement('td')

// area.innerText=informacion[0].value

// fila.append(area)
// fila.append(nombre)
// fila.append(usuario)
// fila.append(email)
// fila.append(edad)

// tabla.append(fila)
