// dispositivo
function infoDisp(){ 
	var arr= [];
	arr["Nombre"]=device.model;
	arr["Phonegap"]=device.cordoba;
	arr["id"]=device.uuid;
	arr["version"]=device.version;
	
	
	return arr;
}