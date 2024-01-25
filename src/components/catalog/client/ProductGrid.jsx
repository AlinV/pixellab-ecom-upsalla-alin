import { useEffect, useState } from 'react';
import { ProductTile } from './ProductTile';
import { css } from '@emotion/css';

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const itemsPerRow = 2;

  useEffect(() => {
    // fetch returns a promise
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        // response.json() returns a promise
        return response.json();
      })
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  return (
    <ul className={gridCssClass}>
      {products.map((product) => {
        const { id } = product;

        return (
          <li key={id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
