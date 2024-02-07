import { uiContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useEffect } from 'react';

export const Pagination = () => {
  const { products, loading } = useProducts();
  const { pagination, setPagination } = useContext(uiContext);
  const { total, perPage, page } = pagination;
  const productsPerPage = [8, 12, 16];

  useEffect(() => {
    setPagination({
      perPage,
      page,
      total: products.length,
    });
  }, [perPage, page, setPagination, products]);

  const changePerPage = (newPerPage) => {
    setPagination({
      ...pagination,
      perPage: newPerPage,
      page: 1,
    });
  };

  if (loading) {
    return <></>;
  }

  const pageCount = Math.ceil(total / perPage);

  return (
    <>
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

      <ul className="flex justify-center gap-2 mt-2">
        {productsPerPage.map((newPerPage, index) => (
          <li key={index}>
            <button
              type="button"
              title={`${newPerPage} items per page`}
              className={`rounded p-2 hover:bg-black hover:text-white transition-colors ${
                newPerPage === perPage ? 'bg-black text-white' : ''
              }`}
              onClick={() => {
                changePerPage(newPerPage);
              }}
            >
              {newPerPage}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
