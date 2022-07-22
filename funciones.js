
/******************funcion para menor mayor intermedio ********************************************/
function  mayor_menor(){
   //se dan valores a variables desde el formulario_mayor_menor principal
    var n1 = parseInt(document.formulario.primero.value);
    var n2 = parseInt(document.formulario.segundo.value);
    var n3 = parseInt(document.formulario.tercero.value);
   /*condicion para comparar numeros
   mayor menor intermedio desde linea 11
   hasta la linea 83
   */
   if( n1<n2 & n2<n3){
     document.formulario.resultadoo.value=(""+n11+"");
     document.formulario.resultadooo.value=(""+n22+"");
     document.formulario.resultado.value=(""+n33+"");
   }
   else if(n1<n3 & n3<n2){
     document.formulario.resultadoo.value=(""+n1+"")
     document.formulario.resultadooo.value=(""+n3+"");
     document.formulario.resultado.value=(""+n2+"");
   } 
   else if(n2<n1 & n1<n3){
     document.formulario.resultadoo.value=(""+n2+"")
     document.formulario.resultadooo.value=(""+n1+"");
     document.formulario.resultado.value=(""+n3+"");
   }
   else if(n2<n3 & n3<n1){
     document.formulario.resultadoo.value=(""+n2+"")
     document.formulario.resultadooo.value=(""+n3+"");
     document.formulario.resultado.value=(""+n1+"");
   }
   else if(n3<n1 & n1<n2){
     document.formulario.resultadoo.value=(""+n3+"")
     document.formulario.resultadooo.value=(""+n1+"");
     document.formulario.resutado.value=(""+n2+"");
   }
   else if(n3<n2 & n2<n1){
     document.formulario.resultadoo.value=(""+n3+"")
     document.formulario.resultadooo.value=(""+n2+"");
     document.formulario.resultado.value=(""+n1+"");
   }
   /*condicionales para el
    caso de haber numeros iguales 
    desde la linea 73 hasta linea 116
   */
   else if(n1==n2 & n2==n3){
    document.write.value= alert("todos los numeros son iguales");

   }
   else if (n1==n3 ){
     document.formulario.value=("es igual el numero "+n1+"y el numero "+n3+"");
     if(n1>n2){
       document.formulario.resultadoo.value=(" "+n2+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n1+"");
     }
     if(n1<n2){
       document.formulario.resultadoo.value=(" "+n1+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n2+"");
     }
   }
   else if(n2==n1){
     document.formulario.value=("es igual el numero"+n2+"y el numero"+n1+"");
     if(n2<n3){
       document.formulario.resultadoo.value=(" "+n2+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n3+"");
 
     }
     if(n2>n3){
       document.formulario.resultadoo.value=(" "+n3+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n2+"");
     }
   }
   else if(n2==n3){
     if(n2<n1){
       document.formulario.resultadoo.value=(" "+n2+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n1+"");
     }
     if(n2>n1){
       document.formulario.resultadoo.value=(" "+n1+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n2+"");
     }
   }
} //  termina funtion mayor_i

/*------------------mayor menor 4 numeros----------------------------*/ 

 function mayor_four(){
  //se dan valores a variables desde el formulario principal
  var n1 = parseInt(document.formulario_mayor_menor.n1.value);
  var n2 = parseInt(document.formulario_mayor_menor.n2.value);
  var n3 = parseInt(document.formulario_mayor_menor.n3.value);
  var n4 = parseInt(document.formulario_mayor_menor.n4.value);


/*condiciones para hayar
   mayor menor de 4 numeros
   se anidaron los if 
*/
  if(n1>n2 & n1>n3 & n1>n4){
   document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n1+"");
    if(n2<n1 & n2<n3 & n2<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n2+"");
    }
    if(n3<n1 & n3<n2 & n3<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n3+"");
    }
    if(n4<n1 & n4<n2 & n4<n3){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n4+"");
    }
  }
  if(n2>n1 & n2>n3 & n2>n4){
   document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n2+"");
    if(n1<n2 & n1<n3 & n2<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n1+"");
    }
    if(n3<n1 & n3<n2 & n3<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n3+"");
    }
    if(n4<n1 & n4<n2 & n4<n3){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n4+"");
    }
  } 

 if(n3>n1 & n3>n2 & n3>n4){
   document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n3+"");
    if(n1<n3 & n1<n2 & n2<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n1+"");
    }
    if(n2<n1 & n2<n3 & n2<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n2+"");
    }
    if(n4<n1 & n4<n2 & n4<n1){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n4+"");
    } 
  }
  if(n4>n1 & n4>n2 & n4>n3){
   document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n4+"");
    if(n1<n2 & n1<n3 & n2<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n1+"");
    }
    if(n2<n1 & n2<n3 & n2<n4){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n2+"");
    }
    if(n3<n1 & n3<n2 & n3<n1){
       document.formulario_mayor_menor.resultado.value=("el numero menor es"+n3+"");
    } 
  }
  if(n1==n2 & n3==n4){
    document.write.value=alert("numeros iguales");

  }

 }
/*---------------------tabla de multiplicar-----------------------------------------------------*/
function tabla(){
  var n = parseInt(document.multi.numero.value);
  var r = "";

 if (n>10  & n>2){
    document.write.value= alert("el numero es mayor");
 }
 else{
  for (var i= 1; i<=10 ;i++){
  r= r+ n + 'x'  +i +'=' + (n * i)+'<br>' ;
  var result =document.getElementById("resultado");
  result.innerHTML =r;
 }
 }
}
/*----------------------contador de digitos----------------------------------------------*/
function cont(){
  var numero = parseInt(document.contador.num.value);
  
  if(numero <10){
    document.contador.resultado_natural.value=("el numero es de un digito");
  }
  if(numero >=10 & numero<99){
    document.contador.resultado_natural.value=('el numero es de dos digitos');
  }
  if(numero >=100 & numero<999){
    document.contador.resultado_natural.value=('el numero es de tres digitos');
  }
  if(numero >=1000 & numero<9999){
    document.contador.resultado_natural.value=('el numero es de cuatro digitos');
  }
  if(numero >=10000 & numero<99999){
    document.contador.resultado_natural.value=('el numero es de cinco digitos');
  }
  if(numero >=100000 & numero<999999){
    document.contador.resultado_natural.value=('el numero es de 6 digitos');
  }
  

}
 /*--------------------mayor menor 2 numeros-------------------------------------*/
 function mayor_dos(){

    var n1= parseInt(document.dosnumeros.n1.value);
    var n2= parseInt(document.dosnumeros.n2.value);
    if(n1>n2){
      document.dosnumeros.resultado_mayor.value=(n1);
      document.dosnumeros.resultado_menor.value=(n2);
   }
   else if(n1<n2){
      document.dosnumeros.resultado_mayor.value=(n2);
      document.dosnumeros.resultado_menor.value=(n1);
   }
   else if(n1==n2){
    document.write.value= alert("los numeros son iguales");
   }
 }
/*--------------------------------------------------------------------------------------*/
  //conversor de medidas 
  function km(){
    var n1 = parseInt(document.conversor.numero_uno.value);
    document.conversor.resultado_conversor.value= n1/1000;
  } 
  function DM(){
    var n1 = parseInt(document.conversor.numero_uno.value);
    document.conversor.resultado_conversor.value= n1/10;
  } 
  function decimetros(){
    var n1 = parseInt(document.conversor.numero_uno.value);
    document.conversor.resultado_conversor.value= n1*10;
  } 

