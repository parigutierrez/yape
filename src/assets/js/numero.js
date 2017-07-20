
var contPhone = document.getElementById('phone_number').value;
var checkBx = document.getElementById('filled-in-box').checked;

document.getElementById("filled-in-box").addEventListener("click", function(){
	
	 document.getElementById("continuar").removeAttribute("disabled");

	 enlazar();
});

document.getElementById("phone_number").addEventListener("onkeyup", function(){

	if(contPhone.length===10){
		alert("10");
	}
});	

function enlazar () {
	var btnContinuar = document.getElementById("continuar");
	btnContinuar.setAttribute("href", "codigo.html"); 
}

document.getElementById("continuar").addEventListener("click", function(){
	
	$.post('http://localhost:3000/api/registerNumber',{
		"phone":contPhone,
		"terms": checkBx
	}).then(function(response){
		console.log(response);
	}).catch(function(error){
		console.log(error);
	})

});