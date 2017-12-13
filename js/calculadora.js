var display = document.getElementById("display")
var operandos = {
    operador: "",
    operadorAnt: "",
    numAnt: 0
}
var calculadora = {
    init: function(){
        var self = this
        var numero = 0
        var tecla_0 = document.getElementById('0')
        var tecla_1 = document.getElementById('1')
        var tecla_2 = document.getElementById('2')
        var tecla_3 = document.getElementById('3')
        var tecla_4 = document.getElementById('4')
        var tecla_5 = document.getElementById('5')
        var tecla_6 = document.getElementById('6')
        var tecla_7 = document.getElementById('7')
        var tecla_8 = document.getElementById('8')
        var tecla_9 = document.getElementById('9')
        var tecla_mas = document.getElementById('mas')
        var tecla_menos = document.getElementById('menos')
        var tecla_por = document.getElementById('por')
        var tecla_dividido = document.getElementById('dividido')
        var tecla_igual = document.getElementById('igual')
        var tecla_punto = document.getElementById('punto')
        var tecla_sign = document.getElementById('sign')
        var tecla_on = document.getElementById('on')

        var por = document.getElementById("por")
        var menos = document.getElementById("menos")
        var mas = document.getElementById("mas")
        var igual = document.getElementById("igual")
    }
    //Tecla 0
    tecla_0.addEventListener("click",function(){
        self.numero("0")
    })
        
    tecla_0.addEventListener("mousedown", function(){
        tecla_0.setAttribute("style","transform:scale(0.95,0.95)")
    })
        
    tecla_0.addEventListener("mouseout", function(){
        tecla_0.setAttribute("style","transform:scale(1,1)")
    })
    //Tecla 1    
    tecla_1.addEventListener("click",function(){
        //self.numero("1")
        display.innerHTML = "1"
    })

    tecla_1.addEventListener("mousedown",function(){
        tecla_1.setAttribute("style","transform:scale(0.95,0.95)")
    })

    tecla_1.addEventListener("mouseout",function(){
        tecla_1.setAttribute("style","transform:scale(1,1)")
    })
}
calculadora.init();