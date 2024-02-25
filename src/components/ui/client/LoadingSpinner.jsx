import { RotatingLines } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <RotatingLines
      visible={true}
      height="20"
      width="20"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
