function validar(){
	var todo_correcto = true;
	var msg = "Algunos campos no están correctos, vuelva a revisarlos\n";
	var cargo='';
	
	if(document.getElementById('usuario').value.length != 0 && (document.getElementById('usuario').value != 'admin' && document.getElementById('usuario').value != 'empleado')){
		msg += "- Usuario: Usuario Incorrecto\n";
		document.getElementById("usuario").value="";
		todo_correcto = false;
	}
	if(document.getElementById('usuario').value == 'admin'){
			if(document.getElementById('contraseña').value.length != 0 && document.getElementById('contraseña').value != 'admin'){
				msg += "- Contraseña: Contraseña Incorrecta\n";
				document.getElementById("contraseña").value="";
				todo_correcto = false;
			}
		else{
			cargo += 'admin';
		}
	}
	if(document.getElementById('usuario').value == 'empleado'){
			if(document.getElementById('contraseña').value.length != 0 && document.getElementById('contraseña').value != 'empleado'){
				msg += "- Contraseña: Contraseña Incorrecta\n";
				document.getElementById("contraseña").value="";
				todo_correcto = false;
			}
		else{
			cargo += 'empleado';
		}
	}
	localStorage.setItem('cargo',cargo);
	if(!todo_correcto){
	alert(msg);
	}

	return todo_correcto;
	}