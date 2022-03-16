function registrarPeli(){
	var Objeto_peli=document.getElementById('titulo').value;
	var logPeli=Objeto_peli.length;	
			
			if(logPeli<4){
				alert("El Titulo es demasiado corto");
				document.getElementById('titulo').style.backgroundColor="red";
			}
			else {
				document.getElementById('titulo').style.backgroundColor="";
			}
}
function meterValores(){
	var Objeto_Genero=document.getElementsByTagName('select')[0]
	var Valores_Genero=["Fantástico", "Histórico", "Documental", "Otros", "Educativo"];
		for(i=0;i<Valores_Genero.length;i++){
			var objeto_option=document.createElement("option");
			objeto_option.value=Valores_Genero[i];
			objeto_option.innerHTML=Valores_Genero[i];
			Objeto_Genero.appendChild(objeto_option);
		}
}
function Enviar(){
	var Objeto_peli=document.getElementById('titulo').value;
	var objeto_gene=document.getElementsByTagName('select')[0].value;
	alert("El titulo "+Objeto_peli+" ha sido registrado con el genero "+objeto_gene+" correctamente")
	document.getElementById('titulo').style.backgroundColor="green";
}