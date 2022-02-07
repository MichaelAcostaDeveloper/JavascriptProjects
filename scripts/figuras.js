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

function areaRectangulo(a,b){
    return a*b
}

function perimetroRectangulo(a,b){
    return 2*a+2*b
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

//Aqui se ubican las funciones para el html de figuras
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const valor=input.value;

    const area=areaCuadrado(valor);

    const resultado=document.getElementById("result");
    resultado.innerHTML="The surface is: "+area+" cm";
}
function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const valor=input.value;

    const perimetro=perimetroCuadrado(valor);
    
    const resultado=document.getElementById("result");
    resultado.innerHTML="The perimeter is: "+perimetro+" cm";
}

function calcularAreaRectangulo(){
    const inputA=document.getElementById("InputRectanguloA");
    const valorA=inputA.value;
    const inputB=document.getElementById("InputRectanguloB");
    const valorB=inputB.value;

    const area=areaRectangulo(valorA,valorB);

    const resultado=document.getElementById("resultRectangle");
    resultado.innerHTML="The surface is: "+area+" cm";
}
function calcularPerimetroRectangulo(){
    const inputA=document.getElementById("InputRectanguloA");
    const valorA=inputA.value;
    const inputB=document.getElementById("InputRectanguloB");
    const valorB=inputB.value;
    const perimetro=perimetroRectangulo(valorA,valorB);
    
    const resultado=document.getElementById("resultRectangle");
    resultado.innerHTML="The perimeter is: "+perimetro+" cm";
}
function circulo(){
    const radio=document.getElementById("InputRadio")
    const r=Number(radio.value);

    const area=areaCircunferencia(r);
    const areaR=Math.round(area)
    const resultado=document.getElementById("resultCircunf")
    resultado.innerHTML="The surfaces is: "+areaR+" cm"
}

function circunf(){
    const radio=document.getElementById("InputRadio")
    const r=Number(radio.value);

    const perimetro=perimetroCircunferencia(r);
    const perimetroR=Math.round(perimetro)
    const resultado=document.getElementById("resultCircunf")
    resultado.innerHTML="The surfaces is: "+perimetroR+" cm"
}
