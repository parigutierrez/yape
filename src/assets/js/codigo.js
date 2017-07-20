//alert("CódigoJS");
var contPhone = document.getElementById('phone_number').value;
var checkBx = document.getElementById('filled-in-box').value;
console.log(checkBx);	
$.post('http://localhost:3000/api/resendCode',{
	"phone":contPhone,
	"terms": checkBx
}).then(function(response){
	console.log(response);
}).catch(function(error){
	console.log(error);
})