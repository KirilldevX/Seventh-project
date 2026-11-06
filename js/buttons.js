let minus = document.querySelector('.min')
let plus = document.querySelector('.plus')
let amount = document.querySelector('.amount')
let count = Number(amount.textContent)
let cart = document.querySelector('.cart_cost')
let nowCost = Number(document.querySelector('.now_cost').textContent)
let addCart = document.querySelector('.add_to_cart')
function updateCart() {
    amount.textContent=count  
    cart.textContent = (count * nowCost).toFixed(2)
    addCart.querySelector('span').textContent = 'Add to cart' 
}
plus.onclick = function() {
    if(count<50) {
        count++;
        updateCart();
    }
}
minus.onclick = function() {
    if(count>1) {
        count--;
        updateCart();
    }
}
addCart.onclick = function() {
    addCart.querySelector('span').textContent = 'Added to cart'
}