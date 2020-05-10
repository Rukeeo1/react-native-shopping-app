import CartItem from '../../models/cart-items';
import { ADD_TO_CART } from '../actions/cart';
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

      if (state.items[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,//add one to the qty if it is already in the object
          prodPrice,//i guess the price of the item remains fixed,
          productTitle,
          state.items[addedProduct.id].sum + prodPrice//if we are adding a new item...we increasing the total sum. if you buy one item for 5 naira...total sum is 5 naira, if you buy two items, total sum is 10
        )
        return {
          ...state,
          items:{
            ...state.items,
            [addedProduct.id]: updatedCartItem,//overide the existing version with exist before
            totalAmount: state.totalAmount + prodPrice
          }
        }
      } else {
        const newCartItem = new CartItem(
          1,
          addedProduct,
          productTitle,
          prodPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: newCartItem },
        };
      }

      break;

    default:
      break;
  }
  return state;
};
