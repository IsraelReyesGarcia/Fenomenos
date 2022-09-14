$(document).ready(function(){
	$('#rangeLluvias').click(function(){
		var año = $(this).val();
		$('#rLluvias').text(año);
	});

	$('#rangeInundacion').click(function(){
		var año = $(this).val();
		$('#rInundacion').text(año);
	});

	$('#rangeDeslaves').click(function(){
		var año = $(this).val();
		$('#rDeslaves').text(año);
	});

	$('#rangeCiclon').click(function(){
		var año = $(this).val();
		$('#rCiclon').text(año);
	});

	$('#rangeSismo').click(function(){
		var año = $(this).val();
		$('#rSismo').text(año);
	});

	$('#rangeNevada').click(function(){
		var año = $(this).val();
		$('#rNevada').text(año);
	});

	$('#rangeGranizada').click(function(){
		var año = $(this).val();
		$('#rGranizada').text(año);
	});

	$('.fenomeno').bind('click',function(){
		$('.fenomeno').removeClass("enable");
		$(".fenomeno").addClass("disable");
		$(".range").removeClass("visible");
		$(".range").addClass("noVisible");
		$(".fenomeno > span").text("");
		$(this).removeClass("disable");
		$(this).addClass("enable");
		
	});

	$("#lluvia").click(function(){
		$(".range").hide();
		$("#rangeLluvias").show();
	});

	$("#inundacion").click(function(){
		$(".range").hide();
		$("#rangeInundacion").show();
	});

	$("#deslave").click(function(){
		$(".range").hide();
		$("#rangeDeslaves").show();
	});

	$("#ciclon").click(function(){
		$(".range").hide();
		$("#rangeCiclon").show();
	});

	$("#sismo").click(function(){
		$(".range").hide();
		$("#rangeSismo").show();
	});

	$("#nevada").click(function(){
		$(".range").hide();
		$("#rangeNevada").show();
	});

	$("#granizada").click(function(){
		$(".range").hide();
		$("#rangeGranizada").show();
	});

	/* $('#lluvias').click(function(){
		var año = $(this).val();
		$('#resL').text(año);

		fenomeno(1,año);
	}); */ 

	/* Inundación */
	
	/* $('input#inundacion').click(function(){
		alert("Prueba con inundaciones");
		
	});*/
});
 
function colorearLluvias(año){
	fenomeno(1,año);
	cargar(1);
}

function colorearInundacion(año){
	fenomeno(2,año);
	cargar(3);
}

function colorearDeslaves(año){
	fenomeno(3,año);
	cargar(4);
}

function colorearCiclon(año){
	fenomeno(2,año);
	cargar(5);
}

function colorearSismo(año){
	fenomeno(5,año);
	cargar(7);
}

function colorearNevada(año){
	fenomeno(2,año);
	cargar(6);
}

function colorearGranizada(año){
	fenomeno(2,año);
	cargar(16);
}

function fenomeno(idFenomeno,año){
	$(".TableEnable").hide();
	var objeto ={
		id:idFenomeno,
		año:año
	};
	var fenomeno = JSON.stringify(objeto);
	var mensaje = "fenomeno="+fenomeno;

	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			/* console.log("Respuestas ...");
 			console.log("Repuesta "+this.responseText); */
/* 			respuesta.innerHTML(this.responseText);
 */			var objeto = JSON.parse(this.responseText);
 			/* console.log("Separación");
			console.log(objeto[1][1]); */
			var valorMaximo = Math.max(...objeto[0]);
			var unidad = valorMaximo/100;
			/* console.log(this.responseText);
			console.log("Separación");
			console.log(objeto);
			console.log("Separación");
			console.log(unidad); */
			var promedio = Math.floor(valorMaximo/100);
			for(var cont=0; cont< 32; cont ++ ){
				/* console.log(objeto[0][cont]); */
				var entero = Math.floor(objeto[0][cont]/unidad);
				/* console.log(entero); */
				/* $('#e05').css('fill', 'rgb(241,235,255)'); */
				switch(cont){
					case 0: $('#e01').css('fill',objeto[1][entero]);
							break;
					case 1: $('#e02').css('fill',objeto[1][entero]);
							break;
					case 2: $('#e03').css('fill',objeto[1][entero]);
							break;
					case 3: $('#e04').css('fill',objeto[1][entero]);
							break;
					case 4: $('#e05').css('fill',objeto[1][entero]);
							break;
					case 5: $('#e06').css('fill',objeto[1][entero]);
							break;
					case 6 : $('#e07').css('fill',objeto[1][entero]);
							break;
					case 7 : $('#e08').css('fill',objeto[1][entero]);
							break;
					case 8 : $('#e09').css('fill',objeto[1][entero]);
							break;
					case 9 : $('#e10').css('fill',objeto[1][entero]);
							break;
					case 10 : $('#e11').css('fill',objeto[1][entero]);
							break;
					case 11 : $('#e12').css('fill',objeto[1][entero]);
							break;
					case 12 : $('#e13').css('fill',objeto[1][entero]);
							break;
					case 13 : $('#e14').css('fill',objeto[1][entero]);
							break;
					case 14 : $('#e15').css('fill',objeto[1][entero]);
							break;
					case 15 : $('#e16').css('fill',objeto[1][entero]);
							break;
					case 16 : $('#e17').css('fill',objeto[1][entero]);
							break;
					case 17 : $('#e18').css('fill',objeto[1][entero]);
							break;
					case 18 : $('#e19').css('fill',objeto[1][entero]);
							break;
					case 19 : $('#e20').css('fill',objeto[1][entero]);
							break;
					case 20 : $('#e21').css('fill',objeto[1][entero]);
							break;
					case 21: $('#e22').css('fill',objeto[1][entero]);
							break;
					case 22: $('#e23').css('fill',objeto[1][entero]);
							break;
					case 23: $('#e24').css('fill',objeto[1][entero]);
							break;
					case 24: $('#e25').css('fill',objeto[1][entero]);
							break;
					case 25: $('#e26').css('fill',objeto[1][entero]);
							break;
					case 26 : $('#e27').css('fill',objeto[1][entero]);
							break;
					case 27 : $('#e28').css('fill',objeto[1][entero]);
							break;
					case 28 : $('#e29').css('fill',objeto[1][entero]);
							break;
					case 29 : $('#e30').css('fill',objeto[1][entero]);
							break;
					case 30 : $('#e31').css('fill',objeto[1][entero]);
							break;
					case 31 : $('#e32').css('fill',objeto[1][entero]);
							break;
					default: console.log("No hay estilos suficientes");
							break;
				}
			}
			/* alert(valorMaximo); */
			/* console.log(valorMaximo);
			console.log(unidad); */
			/* console.log(promedio); */
			
			/* var respuesta = JSON.parse(this.responseText); */
		}
	};
	ajax.open("POST","Controlador/fenomeno.php",true);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send(mensaje);

 }

 function cargar(id){
/*     alert("Tabla desde JavaScript");
 */    console.log("Lo aprendí en  %cEDTeam","color:#1292EE;font-size:2rem;font-weight:bold");
        
/*      alert("Carga");
 */    var dato = "cargar="+id;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            console.log("Separación");
            var ajax = JSON.parse(this.responseText);
            console.log(ajax);
 
			 const ctx = document.getElementById("canva");
			 const mychart = new Chart(ctx,{
				type:'line',
				data: {
				  labels:ajax[0],
				  datasets:[{
					label:"Número de registros",
					data:ajax[1],
					backgroundColor: [
					  'rgba(255, 99, 132, 0.2)',
					  'rgba(54, 162, 235, 0.2)',
					  'rgba(255, 206, 86, 0.2)',
					  'rgba(75, 192, 192, 0.2)',
					  'rgba(153, 102, 255, 0.2)',
					  'rgba(255, 159, 64, 0.2)'
				  ],
				  borderColor: [
					  'rgba(255, 99, 132, 1)',
					  'rgba(54, 162, 235, 1)',
					  'rgba(255, 206, 86, 1)',
					  'rgba(75, 192, 192, 1)',
					  'rgba(153, 102, 255, 1)',
					  'rgba(255, 159, 64, 1)'
				  ],
				  borderWidth:1
				  }]
				},
				options:{
				  scales:{
					y:{
					  beginAtZero:true
					}
				  }
				}
			  });

            /* Generamos la tabla*/
            /* var contenedor = document.getElementById("container_table");
            var tabla = document.createElement("table");
			tabla.className = "TableEnable";
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            tabla.appendChild(thead);
            tabla.appendChild(tbody);

            contenedor.appendChild(tabla); */ 
/*             alert("Se insertó la tabla");
 */            /* Crear elementos en el encabezado de la tabla */
            /* var row_h = document.createElement("tr");
    
            var t_head_1 = document.createElement("th");
            t_head_1.innerHTML="Estado";
            row_h.appendChild(t_head_1);
            var cont = 2000;
            while(cont<=2020){
                var t_head = document.createElement("th");
                thead.id=cont;
                t_head.innerHTML= cont;
                row_h.appendChild(t_head);
                cont ++;
            } 

            thead.appendChild(row_h);
            
            for(var i=1; i<=32; i++ ){
                var contb = 2000;
                var row_b = document.createElement("tr");
                row_b.id = i;
                row_b.className = "row";
                var td_n = document.createElement("td");
                td_n.id = i;
                td_n.className="td";
                td_n.innerHTML = ajax[0][i];
                row_b.appendChild(td_n);
                
                while(contb <=2020){
                    var td_no = document.createElement("td");
                    td_no.id=contb;
                    td_no.innerHTML = ajax[1][i][contb];

                    row_b.appendChild(td_no);
                    contb ++;
                }
                tbody.appendChild(row_b);
            } */
        }
    }
    xmlhttp.open("POST","Controlador/fenomeno.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(dato);

}


	/* $(document).ready(function() {
		var year = $('#yearP').text();
		colorear(year);

		$('.title').bind('click', function() {
			$('.title').removeClass('enabled');
			$('.title').addClass('disabled');
			$('.title > span').text("");
			$(this).removeClass('disabled');
			$(this).addClass('enabled');
		});

		$('#poblacion').bind('click', function() {
			colorear("1990");
			$('table').hide();
			$('table#poblacionT').show();
			$('.slider').hide();
			$('#poblacionS').show();
			$('input[type=range]#yearSP').val(1990);
			$('section#inicio > article#mapa').css('background-color', '#333');
		});

		$('#obesidad').bind('click', function() {
			colorearObesidad("2012");
			$('table').hide();
			$('table#obesidadT').show();
			$('.slider').hide();
			$('#obesidadS').show();
			$('input[type=range]#yearSO').val(2012);
			$('section#inicio > article#mapa').css('background-color', '#CCC');
		});

		$('#hipertension').bind('click', function() {
			colorearHipertension("2018");
			$('table').hide();
			$('table#hipertensionT').show();
			$('.slider').hide();
			//$('#hipertensionS').show();
			$('input[type=range]#yearSO').val(2012);
			$('section#inicio > article#mapa').css('background-color', '#CCC');
		});

		$('#diabetes').bind('click', function() {
			colorearDiabetes("2018");
			$('table').hide();
			$('table#diabetesT').show();
			$('.slider').hide();
			//$('#diabetesS').show();
			$('input[type=range]#yearSO').val(2012);
			$('section#inicio > article#mapa').css('background-color', '#CCC');
		});

		$('#cvd').bind('click', function() {
			colorearCVD("2018");
			$('table').hide();
			$('table#cvdT').show();
			$('.slider').hide();
			$('#cvdS').show();
			$('input[type=range]#yearSO').val(2018);
			$('section#inicio > article#mapa').css('background-color', '#CCC');
		});

		$('#covid').bind('click', function() {
			colorearCovid("2020");
			$('table').hide();
			$('table#covidT').show();
			$('.slider').hide();
			//$('#covidS').show();
			$('input[type=range]#yearSC').val(2012);
			$('section#inicio > article#mapa').css('background-color', '#CCC');
		});
	});


	function colorear(year) {
		$('#poblacion > span').text(year);
		switch (year) {
			case "1990":
				<?php
					foreach($listaEstados as $estado){
						$poblacion = $bd->consultarPoblacion($estado->getId());
						$color = $bd->consultarColor($poblacion[0][2], "azul");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;
			
			case "1995":
				<?php
					foreach($listaEstados as $estado){
						$poblacion = $bd->consultarPoblacion($estado->getId());
						$color = $bd->consultarColor($poblacion[1][2], "azul");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;

			case "2000":
				<?php
					foreach($listaEstados as $estado){
						$poblacion = $bd->consultarPoblacion($estado->getId());
						$color = $bd->consultarColor($poblacion[2][2], "azul");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;

			case "2005":
				<?php
					foreach($listaEstados as $estado){
						$poblacion = $bd->consultarPoblacion($estado->getId());
						$color = $bd->consultarColor($poblacion[3][2], "azul");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;	

			case "2010":
				<?php
					foreach($listaEstados as $estado){
						$poblacion = $bd->consultarPoblacion($estado->getId());
						$color = $bd->consultarColor($poblacion[4][2], "azul");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;

			case "2020":
				<?php
					foreach($listaEstados as $estado){
						$poblacion = $bd->consultarPoblacion($estado->getId());
						$color = $bd->consultarColor($poblacion[5][2], "azul");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;
				
		}
	}

    function colorearObesidad(year) {
		$('#obesidad > span').text(year);
		switch (year) {
			case "2012":
				<?php
					foreach($listaEstados as $estado){
						$obesidad = $bd->consultarObesidad($estado->getId(), "2012");
						$color = $bd->consultarColor($obesidad[0][2], "rosa");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;
			case "2018":
				<?php
					foreach($listaEstados as $estado){
						$obesidad = $bd->consultarObesidad($estado->getId(), "2018");
						$color = $bd->consultarColor($obesidad[1][2], "rosa");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;
		}
		
	}

    function colorearCovid(year) {
		$('#covid > span').text(year);
		switch (year) {
			case "2020":
				<?php
					foreach($listaEstados as $estado){
						$covid = $bd->consultarCovid($estado->getId());
						$color = $bd->consultarColor($covid[0][3], "rojo");
						printf("$('#e%s').css('fill', '%s');", $estado->getClave(), $color);
					}
				?>
			break;
		}
		
	}

 */