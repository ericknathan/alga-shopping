import { Checkbox } from '../Checkbox';
import { Product } from '../../App';

import './styles.css';

interface ShoppingListProps {
  title: string;
  products: Product[];
  onToggle: (id: string, checked: boolean, name: string) => void;
}

export function ShoppingList ({ title, products, onToggle }: ShoppingListProps) {
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
