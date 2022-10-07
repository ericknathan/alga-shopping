import { useDispatch, useSelector } from 'react-redux';
import { toggleProduct } from './store/Products/Products.actions';
import { selectSelectedProductsTotalPrice, selectAllProducts, selectSelectedProducts } from './store/Products/Products.selectors';

import extractPercentage from './utils/extractPercentage';
import { LineChart, AppContainer, AppHeader, ShoppingList } from './components';

import './App.css';

export function App() {
  const dispatch = useDispatch();
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61'];

  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectSelectedProducts);
  const totalPrice = useSelector(selectSelectedProductsTotalPrice);

  function handleToggle (id: string) {
    dispatch(toggleProduct(id));
  }

  return <div className="app-wrapper">
    <div className="app-content">
      <AppHeader />
      <AppContainer
        left={
          <ShoppingList
            title="Produtos disponíveis"
            onToggle={handleToggle}
          />}
        middle={
          <ShoppingList
            title="Sua lista de compras"
            displayOnlySelected
            onToggle={handleToggle}
          />}
        right={<div>
          Estatísticas

          <LineChart
            color={colors[0]}
            title="saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('healthy'))
                .length
            )}
          />
          <LineChart
            color={colors[1]}
            title="nao tao saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('junk'))
                .length
            )}
          />
          <LineChart
            color={colors[2]}
            title="limpeza"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('cleaning'))
                .length
            )}
          />
          <LineChart
            color={colors[3]}
            title="outros"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('others'))
                .length
            )}
          />

          <div style={{ marginTop: 12 }}>
            <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
              previsão de gastos:
            </h2>
            <div style={{ fontSize: 24 }}>
              { totalPrice.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
              }) }
            </div>
          </div>
        </div>}
      />
    </div>
  </div>
}
