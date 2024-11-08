function operaciones (op)
{
var num1 = document.getElementByld("num 1").value;
var num2 = document.getElementByld("num 2").value;

//Comprobamos si se ha introducido números en las cajas de texto
if (isNaN(parseFloat(document.getElementByld('num1').value)))
{
document.getElementByld('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número</span>";
document.getElementByld ("num 1").innerText = "0";
document.getElementByld ("num 1").focus();
} else if (isNaN (parseFloat(document.getElementByld('num2'). value))) {
document.getElementByld('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número</span>";
document.getElementByld("num2").innerText = "0";
document.getElementByld ("num 2").focus();
}
else {
//Si se han introducido los números en ámbas cajas, checamos la operacion
switch(op) {
case 'sumar':
var resultado = parselnt(num1)+parselnt(num2);
document.getElementByld ('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
break;
case 'restar':
var resultado = num1-num2;
document.getElementByld('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
break;
case 'multiplicar':
var resultado = num1*num2;
document.getElementByld('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
break;
case 'dividir':
var resultado= num1/num2;
document.getElementByld('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
break;
}
}
}
