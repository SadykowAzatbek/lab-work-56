import React from 'react';

interface Props {
  price: number;
}
const Price: React.FC<Props> = ({price}) => {

  return (
    <div>
      Price: {price}
    </div>
  );
};

export default Price;