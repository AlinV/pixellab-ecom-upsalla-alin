import Link from 'next/link';
import { css } from '@emotion/css';

export const FooterPrimary = () => {
  const addresses = [
    {
      city: 'Los Angeles',
      shopAddress: `145 Oliveshka Street, Los Angeles, LA 90003`,
      phone: '+44 987 065 901',
      email: 'info@Example.com',
    },
    {
      city: 'San Francisco',
      shopAddress: '210 Pier Street, San Francisco, CA 94111',
      phone: '+44 987 065 902',
      email: 'info@Example.com',
    },
    {
      city: 'New York',
      shopAddress: '711 Snow Street, New York, NY 10014',
      phone: '+44 987 065 903',
      email: 'info@Example.com',
    },
  ];

  const socialMedia = [
    {
      label: 'Facebook',
      title: 'Follow this website on Facebook',
      url: 'https://www.facebook.com',
    },

    {
      label: 'Instragam',
      title: 'Follow this website on Instagram',
      url: 'https://www.instagram.com',
    },

    {
      label: 'Dribbble',
      title: 'Follow this website on Dribbble',
      url: 'https://www.dribbble.com',
    },

    {
      label: 'Pinterest',
      title: 'Follow this website on Pinterest',
      url: 'https://www.pinterest.com',
    },

    {
      label: 'Twitter',
      title: 'Follow this website on Twitter',
      url: 'https://www.twitter.com',
    },

    {
      label: 'Linkedin',
      title: 'Follow this website on Linkedin',
      url: 'https://www.linkedin.com',
    },

    {
      label: 'Behance',
      title: 'Follow this website on Behance',
      url: 'https://www.behance.com',
    },
  ];

  const gridClass = css`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `;

  return (
    <>
      <ul className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-3 gap-y-10">
        {addresses.map((address, index) => {
          const { city, shopAddress, phone, email } = address;
          const addressLines = shopAddress.split(', ');
          const phoneTitle = 'Contact us by phone';
          const emailTitle = 'Contact us by email';

          return (
            <li className="flex flex-col gap-3 lg:gap-5" key={index}>
              <h1 className="text-lg uppercase font-bold">{city}</h1>
              <p className="text-base">
                {`${addressLines[0]},`}
                <span className="block">
                  {addressLines.slice(1).join(', ')}
                </span>
              </p>

              <span className="text-base">
                <Link
                  href={`tel:${phone}`}
                  title={phoneTitle}
                  className="lg:hover:text-[var(--accent1)]"
                >
                  {phone}
                </Link>
              </span>
              <span className="text-base">
                <Link
                  href={`mailto:${email}`}
                  title={emailTitle}
                  className="lg:hover:text-[var(--accent1)]"
                >
                  {email}
                </Link>
              </span>
            </li>
          );
        })}

        <li>
          <h1 className="mb-3 lg:mb-5 text-lg uppercase font-bold">
            Follow us
          </h1>
          <ul className="grid grid-cols-2 grid-rows-4 gap-x-3 lg:gap-x-10 gap-y-2 text-base">
            {socialMedia.map((socialNetwork, index) => {
              const { label, title, url } = socialNetwork;

              return (
                <li className="flex flex-col" key={index}>
                  <Link
                    href={url}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hover:text-[var(--accent1)]"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </>
  );
};
