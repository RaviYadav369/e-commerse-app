export function getItemCount(cartItems) {
    console.log(cartItems);
    return cartItems.reduce((count, cartItem) => cartItem.quantity + count, 0)
}