let valorCompra, descuento, valorFinal;
valorCompra = parseFloat(prompt("Ingrese el valor de la compra"))
document.write("Valor compra" + valorCompra + "<br>")

descuento=0;
valorFinal = valorCompra;

if (valorCompra>=4000) {
    descuento=valorCompra*0.25;
    valorFinal=valorCompra-descuento;
    document.write("Se aplico un descuento del 25% equibalente a: "+descuento+"<br>");
    
}
document.write("Valor Final: " + valorFinal)