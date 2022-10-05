import { useState, useEffect } from 'react';
import { LineChart, AppContainer, AppHeader, ShoppingList } from './components';

import productsMock from './mocks/products.json';
import extractPercentage from './utils/extractPercentage';

import './App.css';

export interface Product {
  id: string;
  type: string;
  name: string;
  checked: boolean;
  price: number;
  tags: string[];
}

export function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [products, setProducts] = useState<Product[]>(productsMock.products)
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const newSelectedProducts = products
      .filter(product => product.checked)
    
    setSelectedProducts(newSelectedProducts)
  }, [products])

  useEffect(() => {
    const total = selectedProducts
      .map(product => product.price)
      .reduce((a, b) => a + b, 0)

    setTotalPrice(total)
  }, [selectedProducts])

  function handleToggle (id: string, checked: boolean, name: string) {
    const newProducts = products.map(product =>
        product.id === id
          ? { ...product, checked: !product.checked }
          : product
    )
    setProducts(newProducts)
  }

  return <div className="app-wrapper">
    <div className="app-content">
      <AppHeader />
      <AppContainer
        left={
          <ShoppingList
            title="Produtos disponíveis"
            products={products}
            onToggle={handleToggle}
          />}
        middle={
          <ShoppingList
            title="Sua lista de compras"
            products={selectedProducts}
            onToggle={handleToggle}
          />}
        right={<div>
          estatisticas

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
