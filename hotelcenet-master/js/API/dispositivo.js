// dispositivo
function infoDisp(){ 
	var arr= [];
	arr["Nombre"]=device.name
	arr["Phonegap"]=device.cordoba;
	arr["id"]=device.uuid;
	arr["version"]=device.version;
	arr["modelo"]=device.model;
	
	return arr;
}