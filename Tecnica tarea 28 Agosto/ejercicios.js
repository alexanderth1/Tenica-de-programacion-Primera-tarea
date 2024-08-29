//1.-
let nombre = 'alex';
console.log(nombre)

//2.-
let edad = 19;
console.log(edad)

//3.- 
let eStudiante = true;
console.log(eStudiante)

//4.-
let number=1;

if (number >0){
    console.log('El numero es positivo')
}else if (number < 0){
    console.log('El numero es negativo')
}else{
    console.log('El numero es neutro')
};

//5.-
let hobbies = ["leer","jugar","comer","correr"]
console.log(hobbies)

//6.- 
let persona = {
    nombre:  'Alex',
    edad: 19,
    esEstudiante: false,
};
console.log(persona);

//7.- 
let nullVar = null;
console.log(nullVar)

//8.-
let años = 19
    for (let i = 1 ; i<= edad;i++){
        console.log("Has cumplido " + i + " años")
    } 

//9.-
let numeroHex = 0x73;
console.log(numeroHex);

//10.- 
let nomBre='Alex'
let Apellido='Jimenez'

nombreCompleto = nomBre + " " + Apellido;
console.log(nombreCompleto)

//11.- 
a=2
b=2

suma= a + b
console.log(suma)

//12.-
c=9
g=4

resta = c - g;
console.log(resta)

//13.-
n1=4
n2=4

multiplicacion = n1 * n2;
console.log(multiplicacion);

//14.- 
a1=10
a2=2

division = a1 / a2;
console.log(division);

//15.- 
b1=10
b2=3

modulo = b1 % b2;
console.log(modulo);

//16.-
let contador = 1;
contador++;
console.log(contador)

//17.-
let contadorDec=5
contadorDec--;
console.log(contadorDec)

//18.-
let listA = ["carro","esfero","pluma","celular"]
console.log(listA)

//19.-
let lista2=["mesa","silla","lampara","libros","hojas","lapiz"];
let BuscarLista= "mesa";

for(let i = 0; i < lista2.length;i++){
    if(lista2[i]=== BuscarLista){
        console.log("Se encuntra en la lista");
        break;
    }else{
        console.log("No se encuentra en la lista");
    }
}

//20.- 
let list = ["mesa","carro","celular","cargador","pantalla"];

list.push("iners");
console.log(list)
list.splice(4,0, "copa america");
console.log(list);

//21.-
let lst = ["mesa","carro","celular","cargador","pantalla"];
//En este eliminamos el valor que vendria ser Celular
let indice= lst.indexOf("celular")
if(indice!== -1){
    lst.splice(indice,1);// eliminamos el valor que es "celular"
}
console.log(lst);

// Ahora procederemos a eliminarlo por el indice
let lst1=["mesa","carro","celular","cargador","pantalla"];
lst1.splice(3,1);
console.log(lst1)

//22.-
let numero1 = 90;
let numero2 = 100;

let nUmiguales = (numero1 === numero2);

console.log(nUmiguales);

//23.-
let numBER1=4
let numBER2=2

let esMayor = (numBER1 > numBER2)
console.log(esMayor)

//24.-
let contrG= ("Encebollado");
let contrI= ("Encebollado");

if(contrG === contrI){
    let seccion= ("BIENVENIDO");
    console.log(seccion);

}else {
    let seccion= (" NO SE PUDO INGRESAR");
    console.log(seccion);
}

//25.- 
let  añoos= 16
let ingresos = 1200

if (añoos>= 16 && ingresos>= 1000){
    let siTributa= ('Es tributaria');
    console.log (siTributa)
}else{
    console.log('Usted no tributa')
}