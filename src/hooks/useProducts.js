import { useEffect, useState } from 'react';

let cache = [];

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (cache.length === 0) {
      // fetch returns a promise

      fetch('https://fakestoreapi.com/products')
        .then((response) => {
          // response.json() returns a promise
          return response.json();
        })
        .then((products) => {
          cache = products;
          setProducts(products);
          setLoading(false);
        })
        .catch((error) => {
          console.dir(error);
          setLoading(false);
          setError(() => {
            return <img src="/images/404.gif" width={600} height={600} />;
          });
        });
    } else {
      setProducts(cache);

      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 5000));
    }
  }, []);

  return { products, loading, error };
};
