let addToCardBtn = document.querySelectorAll(".add-to-card-btn");
let sum = 0;
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
    sum += priceValue;
    console.log(sum);

    //   show total price
    let total = document.getElementById("total-price");
    total.innerText = sum;
  });
}

let applyBtn = document
  .getElementById("apply-btn")
  .addEventListener("click", function () {
    let discount = document.getElementById("discount-input");
    let discountInput = discount.value;
    let discountInputValue = discountInput.split(" ").join("").toUpperCase();
    console.log(discountInputValue);
  });
