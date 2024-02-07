import { CartControls } from '@/components/cart/client';
import {
  GridControls,
  Pagination,
  ProductGrid,
} from '@/components/catalog/client';

export default function productsPage() {
  return (
    <div className="container mx-auto px-4 h-full">
      <header className="flex justify-end">
        <GridControls></GridControls>
        <CartControls></CartControls>
      </header>

      <section className="h-full">
        <ProductGrid></ProductGrid>

        <Pagination></Pagination>
      </section>

      <section></section>
    </div>
  );
}
