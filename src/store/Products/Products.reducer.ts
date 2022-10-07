import productsMock from '../../mocks/products.json';

export enum ACTIONS {
  TOGGLE_PRODUCT = 'TOGGLE_PRODUCT',
}

type ActionType = {
  type: ACTIONS;
  payload: string;
}

export function productsReducer(state = productsMock.products, action: ActionType) {
  switch(action.type) {
    case ACTIONS.TOGGLE_PRODUCT:
      return state.map(product =>
        product.id === action.payload
          ? { ...product, checked: !product.checked }
          : product
      )
    default:
      return state;
  }
}