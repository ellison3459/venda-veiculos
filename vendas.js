function calcular(){

    var vValor = document.getElementById("valor").value;
    var cEntrada = vValor*50;
    var pEntrada = cEntrada/100;
    var cParcela = vValor-pEntrada;
    var pParcela = cParcela/60;
    

    alert("Valor da entrada:"+pEntrada)
    alert("+ 60 de R$:"+pParcela)


    let result = document.getElementById("result")
}