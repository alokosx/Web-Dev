const name = document.querySelector("#customer-name");
const checkout = document.querySelector(".checkout");
checkout.addEventListener("click",function(){
	alert(`Order Sucessfull\nThanks for the order ${name.value}`)
	});