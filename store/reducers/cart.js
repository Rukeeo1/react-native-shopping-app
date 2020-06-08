import CartItem from '../../models/cart-items';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        //check if the product is already in out item object
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1, //add one to the qty if it is already in the object
          prodPrice, //i guess the price of the item remains fixed,
          productTitle,
          state.items[addedProduct.id].sum + prodPrice //if we are adding a new item...we increasing the total sum. if you buy one item for 5 naira...total sum is 5 naira, if you buy two items, total sum is 10
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          addedProduct,
          productTitle,
          prodPrice
        );
      }

      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    case REMOVE_FROM_CART:
      //we add items to the object with their id
      //so we can access a given item and reduce the quantity or remove
      //the item entirely
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;//plurar
    
      if (currentQty > 1) {
        //if quantity is greate that one we need to reduce it
        const updatedCartItem = new CartItem(//singular
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - productTitle
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem }
      } else {
        //we need to erase it if it is one or less
         updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid]//delete the given item
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice
      }

    default:
      break;
  }
  return state;
};
