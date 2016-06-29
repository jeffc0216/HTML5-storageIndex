var storage = localStorage;
function doFirst(){
	storage.clear();

	for(var i=0; i<10; i++){
		storage.setItem('key'+i, 'value'+i);
	}
	document.getElementById('getButton').addEventListener('click', getIndex, false);
}

function getIndex(){
	var index = document.getElementById('indexText').value;
	var key = storage.key(index);
	var value = storage.getItem(key);
	alert('Index '+index+' : '+key+' / '+value);
}

window.addEventListener('load', doFirst, false);

// function storageAccess(id){

// 	var key = document.getElementById('keyText').value;
// 	var value = document.getElementById('valueText').value;

// 	switch(id){
// 		case 0:
// 			storage.setItem(key,value);
// 			break;
// 		case 1:
// 			var item = storage.getItem(key,value);
// 			alert(item);
// 			break;
// 		case 2:
// 			storage.removeItem(key,value);
// 			break;
// 		case 3:
// 			storage.clear();
// 			break;

// 		default:
// 			alert('input 0,1,2,3 please!');
// 	}//end of switch
// 	alert(storage.length); // 現有筆數


// }