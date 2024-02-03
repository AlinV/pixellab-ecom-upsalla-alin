import { useProducts } from '@/hooks';
import { ProductTile } from './ProductTile';
import { css } from '@emotion/css';
import { useEffect, useState, useRef, useContext } from 'react';
import { BiLoader } from 'react-icons/bi';
import { uiContext } from '@/contexts';

export const ProductGrid = () => {
  const { itemsPerRow } = useContext(uiContext);
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [perPage, setPerPage] = useState(8);
  const [page, setPage] = useState(1);
  const topRef = useRef(null);
  const errorMessage = <img src="/images/404.gif" width={600} height={600} />;

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [products, perPage, page]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;
    margin: 64px 0;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return (
      <div className="container mx-auto px-4 flex justify-center items-center h-full ">
        <span
          className="animate-[spin_3s_linear_infinite] text-6xl text-[var(--accent1)]"
          // style={{ animationDuration: '10s' }}
        >
          <BiLoader></BiLoader>
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="text-6xl">404</h1>
        {errorMessage}
        <p className="text-xl">Come on, give it a slap, it might work again!</p>
      </div>
    );
  }

  const pageCount = Math.ceil(products.length / perPage);

  return (
    <>
      <ul className={gridCssClass} ref={topRef}>
        {paginatedProducts.map((product) => {
          const { id } = product;

          return (
            <li key={id}>
              <ProductTile product={product}></ProductTile>
            </li>
          );
        })}
      </ul>

      <ul className="flex justify-center gap-2">
        {Array(pageCount)
          .fill(' ')
          .map((_, index) => {
            const pageIndex = index + 1;
            return (
              <li key={index}>
                <button
                  type="button"
                  title={`Page ${pageIndex}`}
                  className={`rounded p-2 hover:bg-black hover:text-white transition-colors ${
                    pageIndex === page ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => {
                    setPage(pageIndex);
                  }}
                >
                  {pageIndex}
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
