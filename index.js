let addToCardBtn = document.querySelectorAll(".add-to-card-btn");
let totalPrice = 0;
for (const item of addToCardBtn) {
  item.addEventListener("click", function () {
    //   Catch title name****
    let titleName = item.parentNode.childNodes[1].innerText;
    let titleContainer = document.getElementById("title-container");
    let p = document.createElement("p");
    p.innerText = titleName;
    titleContainer.appendChild(p);
    // Catch price*******
    let price = item.parentNode.childNodes[5].childNodes[1].innerText;
    let priceValueText = price.split(" ")[1];
    let priceValue = parseInt(priceValueText);
    totalPrice += priceValue;
    console.log(totalPrice);

    //   show total price
    let total = document.getElementById("total-price");
    total.innerText = totalPrice;
  });
}

let applyBtn = document
  .getElementById("apply-btn")
  .addEventListener("click", function () {
    let discount = document.getElementById("discount-input");
    let discountInput = discount.value;
    let discountInputValue = discountInput.split(" ").join("").toUpperCase();
    if (totalPrice >= 100) {
      if (discountInputValue === "SELL100") {
        let discountPrice = (totalPrice * 10) / 100;
        let discountPriceInt = parseInt(discountPrice);
        let discountDiv = document.getElementById("discount-price");
        discountDiv.innerText = discountPriceInt;

        let calculationTotalPrice = totalPrice - discountPriceInt;
        console.log(calculationTotalPrice);

        let totalCalculatePrice = document.getElementById('total-discount-price')
        totalCalculatePrice.innerText = calculationTotalPrice
        
      } else {
        console.log("discount pan nai");
      }
    } else {
      let totalCalculatePrice = document.getElementById('total-discount-price')
      totalCalculatePrice.innerText = totalPrice
    }
  });
