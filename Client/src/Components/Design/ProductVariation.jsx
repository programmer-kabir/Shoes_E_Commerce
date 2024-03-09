import React from 'react';
import CheckBox from './CheckBox';

const ProductVariation = ({variations }) => {
    return (
        <div className='space-y-3'>
           {variations.map((variation, index) => (
        <CheckBox key={index} text={variation} />
      ))}
        </div>
    );
};

export default ProductVariation;