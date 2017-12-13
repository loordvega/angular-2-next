var cantidad_digitos = 0;
var resultado = 0;
var punto_decimal = false;
var puso_signo_menos = false;
var cuenta = ["","","","","","",""];
var n = "";
var operadores = 1;
var hay_resultado = false;
var ultimo_operador = "";
var ultimo_operando = 0;
var tecla_0 = document.getElementById('0');
var tecla_1 = document.getElementById('1');
var tecla_2 = document.getElementById('2');
var tecla_3 = document.getElementById('3');
var tecla_4 = document.getElementById('4');
var tecla_5 = document.getElementById('5');
var tecla_6 = document.getElementById('6');
var tecla_7 = document.getElementById('7');
var tecla_8 = document.getElementById('8');
var tecla_9 = document.getElementById('9');
var tecla_mas = document.getElementById('mas');
var tecla_menos = document.getElementById('menos');
var tecla_por = document.getElementById('por');
var tecla_dividido = document.getElementById('dividido');
var tecla_igual = document.getElementById('igual');
var tecla_punto = document.getElementById('punto');
var tecla_sign = document.getElementById('sign');
var tecla_on = document.getElementById('on');
var tecla_actual = "";


//Fin efectos tecla       
function representacion_visor(nro){
    resultado_txt = resultado;
    resultado_txt = resultado_txt.toString();
    // Debo asegurarme de colocar 8 digitos mas los simbolos
    if (resultado < 0) {
        es_negativo = true;
    }
    if (resultado != parseInt(resultado)) {
        es_decimal = true;;
    }
       
    if (resultado_txt.length > 8) {
        if (es_negativo && es_decimal) {
            if (resultado_txt.length > 9) {
                resultado_txt = resultado_txt.substr(0,10);
                resultado = parseFloat(resultado_txt);
            } else {
                resultado_txt = resultado_txt.substr(0,9);
                resultado = parseFloat(resultado_txt);
            }
        } else {
            if (es_negativo){
                resultado_txt = resultado_txt.substr(0,9);
                resultado = parseFloat(resultado_txt);
            } else {
                if (es_decimal){
                    resultado_txt = resultado_txt.substr(0,9);
                    resultado = parseFloat(resultado_txt);
                } else {
                    // Es un entero no decimal
                    resultado_txt = resultado_txt.substr(0,8);
                    resultado = parseFloat(resultado_txt);
                }    
            }
        }
    }
    return resultado;
}
//var entero = parseInt(text); // entero = 1234
//var decimal = parseFloat(text); // decimal = 1234.0987
function calcular_resultado(){
    op = "";
    op_ant = cuenta[1];
    ope_ant = cuenta[2];
    resultado = 0;
    resultado_txt ="";
    es_negativo = false;
    es_decimal = false;
    //Almaceno ultimo_operador y ultimo_operando
    if (cuenta[5] == "" && cuenta[6] == "") {
        cuenta[5] = op_ant;
        cuenta[6] = ope_ant;
    } 
    switch (cuenta[1]){
        case "+":
            resultado = parseFloat(cuenta[0]) + parseFloat(cuenta[2]);
            break;
        case "-":
            resultado = parseFloat(cuenta[0]) - parseFloat(cuenta[2]);
            break;
        case "*":
            resultado = parseFloat(cuenta[0]) * parseFloat(cuenta[2]);
            break;
        case "/":
            if (parseFloat(cuenta[2]) != 0){
                resultado = parseFloat(cuenta[0]) / parseFloat(cuenta[2]);
            }    
            break;   
    }
    
    resultado = representacion_visor(resultado);
    
    
    op = cuenta[3];
    cuenta[0] = "";
    cuenta[1] = "";
    cuenta[2] = "";
    cuenta[3] = "";
    cuenta[4] = "x";
    
    if (op == "="){
        cuenta[0] = resultado;                           
        cuenta[1] = "";
        cuenta[2] = "";
        cuenta[3] = "";
        cuenta[4] = "x";
        cuenta[5] = op_ant;
        cuenta[6] = ope_ant;
    } else {
        cuenta[0] = resultado;   
        cuenta[1] = op; 
        cuenta[2] = "";
        cuenta[3] = "";
        cuenta[4] = "x";
        cuenta[5] = "";
        cuenta[6] = "";
    }
    document.getElementById("display").innerHTML = resultado;
    
    punto_decimal = false;
    operadores = 1;
    cantidad_digitos = 0;
    hay_resultado = true;
    return resultado;

    
}
//Fin de la funcion
   
tecla_mas.addEventListener("click", function () {
    resultado_aux = 0;
    op = "";
    tecla_mas.style="border-style:groove";
    setInterval(function(){
        tecla_mas.style="";
    },300);
    
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        punto_decimal = false;
        //No hay repeticion de operación con signo de +
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        //Primera entrada
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "+";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[1] != "" && cuenta[2] == "" && cuenta[3] == "") {
                switch (cuenta[1]){
                    case "+":
                        resultado_aux = parseFloat(cuenta[0]) +  parseFloat(s);
                        break;
                    case "-":
                        resultado_aux = parseFloat(cuenta[0]) -  parseFloat(s);
                        break;
                    case "*":
                        resultado_aux = parseFloat(cuenta[0]) *  parseFloat(s);
                        break;
                    case "/":
                        resultado_aux = parseFloat(cuenta[0]) /  parseFloat(s);
                        break;   
                }
                
                cuenta[0] = resultado_aux;   
                cuenta[1] = "+"; 
                cuenta[2] = "";
                cuenta[3] = "";
                cuenta[4] = "x";
                cuenta[5] = "";
                cuenta[6] = "";
               
                document.getElementById("display").innerHTML = resultado_aux;    
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                    resultado_aux = cuenta[0];
                    cuenta[0] = resultado_aux;   
                    cuenta[1] = "+"; 
                    cuenta[2] = "";
                    cuenta[3] = "";
                    cuenta[4] = "";
                    cuenta[5] = "";
                    cuenta[6] = "";  
                    document.getElementById("display").innerHTML = "0";    
                    operadores = 1;
                    hay_resultado = true;
                    ultimo_operador = 0;
                    ultimo_operando = 0;
                }
            
        }
    }
      
});
tecla_menos.addEventListener("click", function () {
    tecla_menos.style="border-style:groove";
    setInterval(function(){
        tecla_menos.style="";
    },300);
    
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        punto_decimal = false;
        //No hay repeticion de operación con signo de +
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        //Primera entrada
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "-";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[1] != "" && cuenta[2] == "" && cuenta[3] == "") {
                switch (cuenta[1]){
                    case "+":
                        resultado_aux = parseFloat(cuenta[0]) +  parseFloat(s);
                        break;
                    case "-":
                        resultado_aux = parseFloat(cuenta[0]) -  parseFloat(s);
                        break;
                    case "*":
                        resultado_aux = parseFloat(cuenta[0]) *  parseFloat(s);
                        break;
                    case "/":
                        resultado_aux = parseFloat(cuenta[0]) /  parseFloat(s);
                        break;   
                }
                
                cuenta[0] = resultado_aux;   
                cuenta[1] = "-"; 
                cuenta[2] = "";
                cuenta[3] = "";
                cuenta[4] = "x";
                cuenta[5] = "";
                cuenta[6] = "";
               
                document.getElementById("display").innerHTML = resultado_aux;    
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                    resultado_aux = cuenta[0];
                    cuenta[0] = resultado_aux;   
                    cuenta[1] = "-"; 
                    cuenta[2] = "";
                    cuenta[3] = "";
                    cuenta[4] = "";
                    cuenta[5] = "";
                    cuenta[6] = "";  
                    document.getElementById("display").innerHTML = "0";    
                    operadores = 1;
                    hay_resultado = true;
                    ultimo_operador = 0;
                    ultimo_operando = 0;
                }
            
        }
    }
});

tecla_por.addEventListener("click", function () {
    tecla_por.style="border-style:groove";
    setInterval(function(){
        tecla_por.style="";
    },300);
    
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        punto_decimal = false;
        //No hay repeticion de operación con signo de +
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        //Primera entrada
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "*";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[1] != "" && cuenta[2] == "" && cuenta[3] == "") {
                switch (cuenta[1]){
                    case "+":
                        resultado_aux = parseFloat(cuenta[0]) +  parseFloat(s);
                        break;
                    case "-":
                        resultado_aux = parseFloat(cuenta[0]) -  parseFloat(s);
                        break;
                    case "*":
                        resultado_aux = parseFloat(cuenta[0]) *  parseFloat(s);
                        break;
                    case "/":
                        resultado_aux = parseFloat(cuenta[0]) /  parseFloat(s);
                        break;   
                }
                
                cuenta[0] = resultado_aux;   
                cuenta[1] = "+"; 
                cuenta[2] = "";
                cuenta[3] = "";
                cuenta[4] = "*";
                cuenta[5] = "";
                cuenta[6] = "";
               
                document.getElementById("display").innerHTML = resultado_aux;    
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                    resultado_aux = cuenta[0];
                    cuenta[0] = resultado_aux;   
                    cuenta[1] = "*"; 
                    cuenta[2] = "";
                    cuenta[3] = "";
                    cuenta[4] = "";
                    cuenta[5] = "";
                    cuenta[6] = "";  
                    document.getElementById("display").innerHTML = "0";    
                    operadores = 1;
                    hay_resultado = true;
                    ultimo_operador = 0;
                    ultimo_operando = 0;
                }
            
        }
    }
});
tecla_dividido.addEventListener("click", function () {
    tecla_dividido.style="border-style:groove";
    setInterval(function(){
        tecla_dividido.style="";
    },300);
    
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        punto_decimal = false;    
        //No hay repeticion de operación con signo de +
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        //Primera entrada
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "+";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[1] != "" && cuenta[2] == "" && cuenta[3] == "") {
                switch (cuenta[1]){
                    case "+":
                        resultado_aux = parseFloat(cuenta[0]) +  parseFloat(s);
                        break;
                    case "-":
                        resultado_aux = parseFloat(cuenta[0]) -  parseFloat(s);
                        break;
                    case "*":
                        resultado_aux = parseFloat(cuenta[0]) *  parseFloat(s);
                        break;
                    case "/":
                        resultado_aux = parseFloat(cuenta[0]) /  parseFloat(s);
                        break;   
                }
                
                cuenta[0] = resultado_aux;   
                cuenta[1] = "/"; 
                cuenta[2] = "";
                cuenta[3] = "";
                cuenta[4] = "x";
                cuenta[5] = "";
                cuenta[6] = "";
               
                document.getElementById("display").innerHTML = resultado_aux;    
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                    resultado_aux = cuenta[0];
                    cuenta[0] = resultado_aux;   
                    cuenta[1] = "/"; 
                    cuenta[2] = "";
                    cuenta[3] = "";
                    cuenta[4] = "";
                    cuenta[5] = "";
                    cuenta[6] = "";  
                    document.getElementById("display").innerHTML = "0";    
                    operadores = 1;
                    hay_resultado = true;
                    ultimo_operador = 0;
                    ultimo_operando = 0;
                }
            
        }
    }
});

tecla_igual.addEventListener("click", function () { 
    op_aux = "";
    ope_aux = 0;
    
    tecla_igual.style="border-style:groove";
    setInterval(function(){
        tecla_igual.style="";
    },300);
    
    if (document.getElementById("display").innerHTML != "0") {
        punto_decimal = false;
        cantidad_digitos = 0;
        n = document.getElementById("display").innerHTML;
        resultado_txt = "";
        if (cuenta[0] != "" && cuenta[1] != "") {
                //Coloco el resto de la cuenta
                switch (cuenta[1]) {
                    case "+":
                        cuenta[2] = parseFloat(n);
                        cuenta[3] = "=";
                        document.getElementById("display").innerHTML = calcular_resultado();   
                        operadores = 1;
                        hay_resultado = true;
                        break;
                    case "-":
                        cuenta[2] = parseFloat(n);
                        cuenta[3] = "=";
                        document.getElementById("display").innerHTML = calcular_resultado();    
                        operadores = 1;
                        hay_resultado = true;
                        break;
                    case "*":
                        cuenta[2] = parseFloat(n);
                        cuenta[3] = "=";
                        document.getElementById("display").innerHTML = calcular_resultado();
                        operadores = 1;
                        hay_resultado = true;
                        break;
                    case "/":
                        if (parseFloat(n) != 0){
                            cuenta[2] = parseFloat(n);
                            cuenta[3] = "=";
                            document.getElementById("display").innerHTML = calcular_resultado();   
                            operadores = 1;
                            hay_resultado = true;
                        }    
                        break;    
                    
                } 

        } else {  
            if (cuenta[5] != "" && cuenta[6] != "") {
                op_aux = cuenta[5];
                ope_aux = cuenta[6];
                switch (cuenta[5]) {
                    case "+":    
                        cuenta[0] = parseFloat(cuenta[0]) + parseFloat(cuenta[6]);    
                        break;
                    case "-":
                        cuenta[0] = parseFloat(cuenta[0]) - parseFloat(cuenta[6]);   
                        break;
                    case "*":
                        cuenta[0] = parseFloat(cuenta[0]) * parseFloat(cuenta[6]);    
                        break;
                    case "/":
                        if (parseFloat(cuenta[6]) > 0){
                            cuenta[0] = parseFloat(cuenta[0]) / parseFloat(cuenta[6]);    
                        }    
                        break;    
                }
                resultado = parseFloat(cuenta[0]);
                resultado = representacion_visor(resultado);
                cuenta[0] = resultado;
                cuenta[1] = "";
                cuenta[2] = "";
                cuenta[3] = "";
                cuenta[4] = "x";
                cuenta[5] = op_aux;
                cuenta[6] = ope_aux;
                document.getElementById("display").innerHTML = resultado;
                
                operadores = 1;
                hay_resultado = true;
            }
             
        }        
        
        
    }
});

tecla_sign.addEventListener("click", function () {   
    tecla_sign.style="border-style:groove";
    setInterval(function(){
        tecla_sign.style="";
    },300);
    
    sin_signo = "";    
    if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
        if (document.getElementById("display").innerHTML[0] != "-" ){
            document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML; 
        } else {
            sin_signo = document.getElementById("display").innerHTML;
            sin_signo = sin_signo.substring(1); 
            document.getElementById("display").innerHTML = sin_signo; 
    }
   }
});

tecla_punto.addEventListener("click", function () {
    tecla_punto.style="border-style:groove";
    setInterval(function(){
        tecla_punto.style="";
    },300);  
    
    if (cantidad_digitos > 0 && cantidad_digitos < 8) {
        if (punto_decimal == false) {
            punto_decimal = true;
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "."; 
        } else {
            punto_decimal = false;
        }
    }
    
});

tecla_on.addEventListener("click", function () {
    tecla_on.style="border-style:groove";
    setInterval(function(){
        tecla_on.style="";
    },300);
    
    document.getElementById("display").innerHTML = "0";
    cantidad_digitos = 0;
    punto_decimal = false;
    hay_resultado_signo_igual = false;
    cuenta.length = 0;
    cuenta[0] = "";
    cuenta[1] = "";
    cuenta[2] = "";
    cuenta[3] = "";
    cuenta[4] = "";
    cuenta[5] = "";
    cuenta[6] = "";
    n = "";
    hay_resultado = false;
});

tecla_0.addEventListener("click", function () {
   
    tecla_0.style = "border-style:groove";
    setInterval(function(){
        tecla_0.style = "";
    },300);
    if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
        cuenta[4] = "";
        cantidad_digitos = cantidad_digitos + 1;
        
    }    
});

tecla_1.addEventListener("click", function () {
    tecla_1.style="border-style:groove";
    setInterval(function(){
        tecla_1.style="";
    },300);
    
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "1";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }
            
});
tecla_2.addEventListener("click", function () {
    tecla_2.style="border-style:groove";
    setInterval(function(){
        tecla_2.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "2";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
tecla_3.addEventListener("click", function () {
    tecla_3.style="border-style:groove";
    setInterval(function(){
        tecla_3.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "3";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
       
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
tecla_4.addEventListener("click", function () {
    tecla_4.style="border-style:groove";
    setInterval(function(){
        tecla_4.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "4";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
tecla_5.addEventListener("click", function () {
    tecla_5.style="border-style:groove";
    setInterval(function(){
        tecla_5.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "5";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
tecla_6.addEventListener("click", function () {
    tecla_6.style="border-style:groove";
    setInterval(function(){
        tecla_6.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "6";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});

tecla_7.addEventListener("click", function () {
    tecla_7.style="border-style:groove";
    setInterval(function(){
        tecla_7.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "7";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
tecla_8.addEventListener("click", function () {
    tecla_8.style="border-style:groove";
    setInterval(function(){
        tecla_8.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "8";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
tecla_9.addEventListener("click", function () {
    tecla_9.style="border-style:groove";
    setInterval(function(){
        tecla_9.style="";
    },300);
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "9";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos > 0 && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});

