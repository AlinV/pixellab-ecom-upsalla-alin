import { ProductGrid } from '@/components/catalog/client';

export default function Home() {
  return (
    <div className="container mx-auto px-4 h-full">
      <header></header>

      <section className="h-full">
        <ProductGrid></ProductGrid>
      </section>

      <section></section>
    </div>
  );
}
