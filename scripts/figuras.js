//Figura Cuadrado
//Cuando escribimos la variable dentro de la funcion, esta variable se llama parametro.
//Cuando usamos la funcion, esta variable se llama argumento.
console.group('Cuadrado');
function perimetroCuadrado(lado){
    return lado*4
}

function areaCuadrado(lado){
    return Math.pow(lado,2)
}
console.groupEnd()

//Figura Triangulo
console.group('Triangulo')
function perimetroTriangulo(a,b,c){
    return a+b+c
}
function areaTriangulo(base,altura){
    return (base*altura)/2
}
console.groupEnd();

//Circunferencia
console.group('Circunferencia')
function diametro(radio){
    return radio*2
}
function areaCircunferencia(radio){
    return Math.PI*Math.pow(radio,2)
}
function perimetroCircunferencia(radio){
    return diametro(radio)*Math.PI
}
console.groupEnd();
