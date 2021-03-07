function getSizeCost() {
    let selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
   let selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    let selectedNumber = document.getElementById("pizzanumber").value;
    return parseInt(selectedNumber);
}
function onions(){
    let onion = 0;
    let addOnions = document.getElementById("toppingone");
    if (addOnions.checked === true) {
        onion=150;
    }
    return parseInt(onions);
}
function mushrooms() {
    let mushroom = 0;
    let addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}
    
function pineapple(){
    let pineapple = 0;
    let addPineapple = document.getElementById("toppingone");
    if (addPineapple.checked === true) {
        pineapple=150;
    }
    return parseInt(pineapple);
}
function sweetCorn(){
    let sweetCorn = 0;
    let addSweetcorn = document.getElementById("toppingone");
    if (addSweetcorn.checked === true) {
        sweetCorn=200;
    }
    return parseInt(sweetcorn);
}
function bacon(){
    let bacon = 0;
    let addBacon = document.getElementById("toppingone");
    if (addBacon.checked === true) {
        bacon=200;
    }
    return parseInt(bacon);
}
function greenPepper(){
    let greenPepper = 0;
    let addgreenPepper = document.getElementById("toppingone");
    if (addgreenPepper.checked === true) {
        greenPepper=150;
    }
    return parseInt(greenPepper);
}

function calctotalPrice(e) {
    event.preventDefault();
    let totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());

        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +".For delivery services kindly enter your details" )

}
//Delivery
$(document).ready(function () {
    $("#delivery").submit (function () {
       let name = $("input#name").val();
       let number = $("input#number").val();
       let location = $("input#location").val();

       alert ("Hello" + name + ". Your order has been successfuly received and will be delivered to" + location + "within an hour. The delivery will cost Ksh 250/= Thankyou for choosing MyThick-pizza")
    });
});


