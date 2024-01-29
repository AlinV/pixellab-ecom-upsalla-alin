import { Separator } from '@/components/ui/server';
import { FooterPrimary } from './FooterPrimary';
import { FooterSecondary } from './FooterSecondary';

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4 lg:px-0 text-[var(--accent3)] pt-24 pb-10">
        <FooterPrimary></FooterPrimary>
      </section>

      <Separator></Separator>

      <section className="container mx-auto px-4 lg:px-0 flex justify-center pt-8 pb-10 text-[var(--accent3)]">
        <FooterSecondary></FooterSecondary>
      </section>
    </>
  );
};
