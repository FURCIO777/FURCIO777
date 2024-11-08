alert("esta es una ventana emergente con mensaje opcional")
//ventana con respuesta multiple 
 var resultado=confirm('Estas seguro de que quieres terminar, da Aceptar');
 if (resultado===true){
 alert('okey, si estas seguro');
 }else{
    alert('pareces indeciso');
 } 
 // pregunta cuantos años tiene y despliega si eres mayor o menor de edad 
 var edad=prompt('cuantos años tienes');
 if(edad>17){
    alert('ya eres mayor de edad');
 }else{ 
    alert('aun eres un peque');
 }