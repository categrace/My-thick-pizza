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
function onions(){
    let onions = 0;
    let addonions = getElementById("toppingone");
    if (addonions.checked === true) {
        onions=150;
    }
    return parseInt(onions);
}
function mushroom(){
    let mushroom = 0;
    let addmushroom = getElementById("toppingone");
    if (addmushroom.checked === true) {
        mushroom=300;
    }
    return parseInt(mushroom);
}
function pineapple(){
    let pineapple = 0;
    let addpineapple = getElementById("toppingone");
    if (addpineapple.checked === true) {
        pineapple=150;
    }
    return parseInt(pineapple);
}
function sweetcorn(){
    let sweetcorn = 0;
    let addsweetcorn = getElementById("toppingone");
    if (addsweetcorn.checked === true) {
        sweetcorn=200;
    }
    return parseInt(sweetcorn);
}
function bacon(){
    let bacon = 0;
    let addbacon = getElementById("toppingone");
    if (addbacon.checked === true) {
        bacon=200;
    }
    return parseInt(bacon);
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


