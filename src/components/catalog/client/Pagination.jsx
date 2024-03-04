import { uiContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useEffect } from 'react';

export const Pagination = () => {
  const { products, loading } = useProducts();
  const { pagination, setPagination } = useContext(uiContext);
  const { total, perPage, page } = pagination;

  useEffect(() => {
    setPagination({
      perPage,
      page,
      total: products.length,
    });
  }, [perPage, page, setPagination, products]);

  if (loading) {
    return <></>;
  }

  const pageCount = Math.ceil(total / perPage);

  return (
    <div className="mb-6">
      <h1 className="text-center text-xl text-neutral-900 font-medium mb-2">
        Pages
      </h1>
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
                    setPagination({ ...pagination, page: pageIndex });
                  }}
                >
                  {pageIndex}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
