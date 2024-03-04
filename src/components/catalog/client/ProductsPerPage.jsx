import { uiContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';

export const ProductsPerPage = () => {
  const { pagination, setPagination } = useContext(uiContext);
  const { perPage } = pagination;
  const productsPerPage = [8, 12, 16];

  const changePerPage = (newPerPage) => {
    setPagination({
      ...pagination,
      perPage: newPerPage,
      page: 1,
    });
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-center text-xl text-neutral-900 font-medium mb-2">
        Products per page
      </h1>
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
    </div>
  );
};
