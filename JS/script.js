function getSizeCost() {
    let selectedSize = getElementById("size").value;
    return parseInt(selectedSize);
}
function getCrustCost() {
    let selectedCrust = getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    let selectedNumber = getElementById("pizzanumber").value
    return parseInt(selectedNumber);
}
function Onions(){
    let Onions = 0;
    let addOnions = getElementById("toppingone");
    if (addOnions.checked === true) {
        Onions=150;
    }
    return parseInt(Onions);
}
function Mushroom(){
    let Mushroom = 0;
    let addMushroom = getElementById("toppingone");
    if (addMushroom.checked === true) {
        Mushroom=300;
    }
    return parseInt(Mushroom);
}
function Pineapple(){
    let Pineapple = 0;
    let addPineapple = getElementById("toppingone");
    if (addPineapple.checked === true) {
        Pineapple=150;
    }
    return parseInt(Pineapple);
}
function Sweetcorn(){
    let Sweetcorn = 0;
    let addSweetcorn = getElementById("toppingone");
    if (addSweetcorn.checked === true) {
        Sweetcorn=200;
    }
    return parseInt(Sweetcorn);
}
function Bacon(){
    let Bacon = 0;
    let addBacon = getElementById("toppingone");
    if (addBacon.checked === true) {
        Bacon=200;
    }
    return parseInt(Bacon);
}
function greenPepper(){
    let greenPepper = 0;
    let addgreenPepper = getElementById("toppingone");
    if (addgreenPepper.checked === true) {
        greenPepper=150;
    }
    return parseInt(greenPepper);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + Onions()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}
//Delivery
$(document).ready(function () {
    $("#delivery").submit (function () {
       let name = $("input#name").val();
       let number = $("input#number").val();
       let location = $("input#location").val();

       alert ("Hello" + name + ". Your order has been successfuly received and will be delivered to" + location + "within an hour. The delivery will cost Ksh /250= Thankyou for choosing MyThick-pizza")
    });
});


