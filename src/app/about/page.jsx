import { ContinueShopping } from '@/components/ui/server';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container px-4 mx-auto">
      <div className="h-aboutCoverBg overflow-hidden flex justify-center items-center mb-10">
        <Image
          src="/images/photo-ecom.webp"
          width={1536}
          height={650}
          alt="About us"
        ></Image>
      </div>

      <section className="px-72 text-neutral-900">
        <h1 className="text-3xl uppercase font-medium text-center lg:text-left my-7">
          About us
        </h1>

        <div className="flex flex-col gap-6 mb-10">
          <p>
            Them first created in creepeth don{"'"}t whose waters saying. Years
            whose yielding which so behold lights tree he signs. Creepeth tree
            fill kind cattle, kind firmament tree of won{"'"}t may subdue May
            living very make. Thing man beginning made.
          </p>

          <p>
            Created may creature let good, unto living don{"'"}t brought may
            winged greater fowl fill. Form above in kind, fruitful waters female
            form male years were thing fowl midst forth itself you{"'"}re you
            you can{"'"}t second fill it divide fruit. Form and without.Said i
            after behold set light that abundantly open abundantly image
            creature. Lights spirit fly in face them so beast you let abundantly
            tree signs divide. Together lesser spirit herb Us, itself behold i.
            You{"'"}ll, from creature fruitful.
          </p>

          <p>
            Also years. Wherein. Light don{"'"}t there sixth. Void. Seed a. His
            sea, land doesn{"'"}t seasons, said. Beast, creepeth, subdue it
            life, together. In it third fourth wherein, meat good doesn{"'"}t
            which second man. Form gathering. Dry isn{"'"}t. Subdue moved.
            Above.
          </p>
        </div>

        <div className="inline-flex h-20">
          <ContinueShopping></ContinueShopping>
        </div>
      </section>
    </div>
  );
}
