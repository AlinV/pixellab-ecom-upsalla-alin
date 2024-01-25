import { ProductGrid } from '@/components/catalog/client';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header></header>

      <section>
        <ProductGrid></ProductGrid>
      </section>

      <section></section>
    </div>
  );
}
