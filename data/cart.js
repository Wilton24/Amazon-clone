export const cart = [{
  productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity: 3
},{
  productId: 'a82c6bac-3067-4e68-a5ba-d827ac0be010',
  quantity: 1
}];

export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId == cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if (matchingItem){
    matchingItem.quantity += 1;
  } else{
    cart.push({
      productId: productId,
      quantity:1
    })
  }
};