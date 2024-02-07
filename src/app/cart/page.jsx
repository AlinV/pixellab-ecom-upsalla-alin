import { CartControls } from '@/components/cart/client';
import { ContinueShopping } from '@/components/ui/server';

export default function CartPage() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-between">
        <ContinueShopping></ContinueShopping>

        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-8">Products</div>

        <aside className="col-span-4">
          <div>
            <button type="button" title="Proceed to Checkout">
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
