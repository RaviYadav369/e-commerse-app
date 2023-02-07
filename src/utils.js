export function getItemCount(cartItems) {
    console.log(cartItems);
    return cartItems.reduce((count, cartItem) => cartItem.quantity + count, 0)
}

export function getSumTotal(cartItem){
    return cartItem.reduce((sum, {product, quantity})=> product.price*quantity + sum,0)
}