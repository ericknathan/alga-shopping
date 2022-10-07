import { ACTIONS } from "./Products.reducer";

export function toggleProduct(id: string) {
  return {
    type: ACTIONS.TOGGLE_PRODUCT,
    payload: id,
  }
}