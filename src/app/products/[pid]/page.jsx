import { CartControls } from '@/components/cart/client';
import { ContinueShopping, CustomerRating } from '@/components/ui/server';
import { baseUrl } from '@/index';
import Image from 'next/legacy/image';
import { redirect } from 'next/navigation';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      redirect('/404');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);
  const { image: imageSrc, title, description, price, rating, id } = product;
  const { rate } = rating;

  console.log(`${baseUrl}/products/${id}`);

  const container = 'container px-4 mx-auto';
  return (
    <div className="container mx-auto px-4 h-full">
      <header className={`${container} flex justify-between`}>
        <ContinueShopping></ContinueShopping>
        <CartControls></CartControls>
      </header>

      <section className=" border-b border-zinc-200 mt-16 pb-16">
        <div
          className={`${container} grid grid-rows-1 grid-cols-2 items-center`}
        >
          <div>
            <Image
              width={600}
              height={600}
              src={imageSrc}
              alt={`Image for product ${title}`}
              className="inline "
              objectFit="contain"
            ></Image>
          </div>

          <div className="text-neutral-900">
            <header className="mb-12">
              <h1 className="text-2xl font-medium uppercase">{title}</h1>
              <div className="flex items-center gap-4 text-2xl">
                <CustomerRating rating={product.rating}></CustomerRating>
                <span className="text-base">{`${Math.floor(rate)} Stars`}</span>
              </div>
            </header>

            <div className="mb-12">
              <p className="mb-12">{description}</p>

              <span className="text-3xl font-bold">${price}</span>
            </div>

            <footer>
              <button
                type="button"
                title="Add to cart"
                className="uppercase px-6 py-3 bg-neutral-900 text-white hover:bg-[var(--accent1)] text-sm font-medium"
              >
                Add to cart
              </button>
            </footer>
          </div>
        </div>
      </section>
      <section className="border-t border-zinc-200 mt-16 pt-16">
        <div className={`${container}`}>
          <h1 className="text-center uppercase text-xl font-medium text-neutral-900 mb-5">
            Related products
          </h1>

          {JSON.stringify(product)}
        </div>
      </section>
    </div>
  );
}
