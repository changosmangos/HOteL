//archivos
function subirFoto(foto,nom){
	var options = new FileUploadOptions();
	options.fileKey="archivo";
	options.fileName="Carlos alberto";

	var ft = new FileTransfer();
	ft.upload(foto, "http://www.igitsoft.com/pgtest.php", function(r){
		navigator.notification.confirm("Los datos han sido registrados satisfactoriamente", function(btn){
			switch(btn){
				case 1:
					navigator.notification.vibrate(5000);
					break;
				case 2:
					navigator.notification.beep(3);
					break;
				case 3:  
				  navigator.notification.alert (infoDisp() ["nombre"], null, "info","Si");		 
			}
			regitro(nom); 
			window.location.href="#page";
		}, "Registro", "Vibrar,Sonar,Info,Cancelar");
	}, function(err){
		navigator.notification.alert("Error al Subir el archivo: "+err.code, null, "Registro", "Aceptar");
	}, options);
}

//<input type="file" name="arc" />