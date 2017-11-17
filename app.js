$.getJSON('http://mindicador.cl/api', function(data) {
    
 
	var dolar = data.dolar.valor
	var euro = data.euro.valor
	var utm = data.utm.valor
	var uf = data.uf.valor


	$('#tabla').append('<tr> <td>' + dolar + '</td><td>'+ euro + '</td> <td>'+ uf + '</td> <td>'+ utm + '</td> </tr>')


	var calcularDolar = function(pesos){
		return pesos / dolar
	}

	var calcularEuros = function(pesos2){
		return pesos2 / euro
	}

	var calcularPeso = function(dol){
		return dol * dolar;
	}
 

	$('#boton').on('click', evaluacionMonedas.bind(this))
	$('#boton2').on('click', evaluacionMonedas.bind(this))

	function evaluacionMonedas(e) {
		e.preventDefault()

		if (e.target.id === 'boton') {
			var dolares = calcularDolar(parseInt(txtcaja1.value)) 
			txtcaja2.value = '$' + dolares
			var euros = calcularEuros(parseInt(txtcaja1.value)) 

			txtcaja3.value = '€' + euros
		} else if (e.target.id === 'boton2') {

			var pesos = calcularPeso(parseFloat(txtcaja4.value)) 
			txtcaja5.value = '$' + pesos
		}
	} 




}).fail(function() {
    console.log('Error al consumir la API!')
})





  
