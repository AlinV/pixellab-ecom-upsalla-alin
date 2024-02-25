import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useRelatedProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch(`${baseUrl}/products/category/${category}`)
      .then((response) => {
        return response.json();
      })
      .then((relatedProducts) => {
        setProducts(relatedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.dir(error);
        setLoading(false);
        setError('404');
      });
  }, [category]);

  return { products, loading, error };
};
