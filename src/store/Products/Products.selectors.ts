interface Product {
  id: string;
  type: string;
  name: string;
  checked: boolean;
  price: number;
  tags: string[];
}

interface StateProps {
  products: Product[];
}

export const selectAllProducts = (state: StateProps) => state.products;

export const selectSelectedProducts = (state: StateProps) => state.products
  .filter(product => product.checked);

export const selectSelectedProductsTotalPrice = (state: StateProps) => state.products
  .filter(product => product.checked)
  .reduce((currentState, product: Product) => currentState + product.price, 0);