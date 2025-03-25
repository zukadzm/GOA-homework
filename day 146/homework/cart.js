// შექმეით cart.js სადაც გექნებათ ფუნქცია cart-ში დამატების (addToCart). ასევე გექნებათ renderCart() ფუნქცია და getTotalPrice(). 

const cart = []

function addtoCart(product){
    cart.push(product)
}

function gettotalPrice(){
    return cart.reduce((total, item) => total + item.price)
}

function rendercart(){
    let myHtml2 = '';
    cart.forEach(item => {
        myHtml2+= `<div>${item.name} - $${item.price} <button onclick="removeFromCart(${item.id})">Remove</button></div>`
    })
    document.getElementById("cart").innerHTML = myHtml2
    document.getElementById("totalprice").innerHTML = `total: ${getTotalPrice}`
}

function removefromCart(){
    cart = cart.filter(item => item.id !== products.product)
    renderCart()
}


export {addtoCart, gettotalPrice, rendercart, removefromCart}