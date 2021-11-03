function calcular(){

    var vValor = document.getElementById("valor").
    value;
    
    
    var cEntrada = vValor*50;
    var pEntrada = cEntrada/100;
    var cParcela = vValor-pEntrada;
    var pParcela = cParcela/60;
    var cjuros = pParcela*70;
    var pjuros = cjuros/100+pParcela;
    
    
    alert("Valor da entrada:"+pEntrada)
    alert("+ 60 de R$:"+pjuros)


    let result = document.getElementById("result")
}


/* function mostrarTexto () {
 visualizar.addEventListener('click', function())
}
 */
