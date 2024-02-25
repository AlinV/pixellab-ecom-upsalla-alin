import {
  CartControls,
  CartDisplay,
  CartTotals,
} from '@/components/cart/client';
import { ContinueShopping } from '@/components/ui/server';

export default function CartPage() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-between">
        <ContinueShopping></ContinueShopping>

        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <CartDisplay></CartDisplay>
        </div>

        <aside className="col-span-4">
          <CartTotals></CartTotals>
        </aside>
      </section>

      <section className="mt-4">
        <form className="flex gap-3">
          <input
            type="text"
            name="coupon code"
            id="coupon-code"
            placeholder="Coupone Code"
            className="border border-zinc-400 py-2 px-3 focus:outline-[var(--accent1)] focus:outline-double"
          />
          <button
            type="submit"
            className="border-2 border-black bg-transparent transition-colors hover:bg-[var(--accent1)] hover:border-[var(--accent1)] hover:text-white py-2 px-2 lg:px-8"
          >
            Apply Coupon
          </button>
        </form>
      </section>
    </div>
  );
}
