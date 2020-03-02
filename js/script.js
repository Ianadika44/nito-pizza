function addSize() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
  }
  function addToppings() {
    var selectedNumber = document.getElementById("toppings").value;
    return parseInt(selectedNumber);
  }
  function addCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
  }
  function getAllNumbers() {
    var selectedNumber = document.getElementById("quantity").value;
    return (selectedNumber);
  }

  function getTotalAmount() {
    event.preventDefault();
    var totalPrice = (addSize() + addToppings() + addCrust())  * (getAllNumbers());
        console.log(totalPrice);
    alert("Your order of " + getAllNumbers() + " pizzas.Total amount is " + totalPrice +"." );
    prompt("add location");
    alert("delivery fee is ksh 170");
    alert("Your package will be delivered at your doorstep in a shortwhile");
    alert("thankyou and continue shopping with us.")
  }