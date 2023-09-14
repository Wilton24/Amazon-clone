export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
 cart = [{
    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 3
  },{
    productId: 'a82c6bac-3067-4e68-a5ba-d827ac0be010',
    quantity: 1
  }];
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

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

  saveToStorage();
};


export function removeFromCart(productId){
  const newCart = [];

  cart.forEach(cartItem =>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

// New features