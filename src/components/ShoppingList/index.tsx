import { useSelector } from 'react-redux';
import { selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selectors';

import { Checkbox } from '../Checkbox';

import './styles.css';

interface ShoppingListProps {
  title: string;
  displayOnlySelected?: boolean;
  onToggle: (id: string, checked: boolean, name: string) => void;
}

export function ShoppingList ({ title, displayOnlySelected = false, onToggle }: ShoppingListProps) {
  const products = useSelector(displayOnlySelected ? selectSelectedProducts : selectAllProducts);

  return <div>
    <h2 className="title">
      { title }:
    </h2>
    <div className="array">
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </div>
  </div>
}
