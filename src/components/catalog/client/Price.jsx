export const Price = ({ product }) => {
  const { price } = product;

  const euroPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);

  console.log(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price),
  );

  return <span>{euroPrice}</span>;
};
