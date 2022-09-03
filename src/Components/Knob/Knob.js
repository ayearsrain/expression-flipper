
import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSpring, config } from '@react-spring/web';

import { Component } from './Knob.Styled';

import { getScaledRangeValue } from '../../Helpers/Range';

const Knob = ( { min = 0, max = 100, defaultValue = 50, onChange } ) => {

  let offset = 0;

  const maxAngle = 135;
  const minAngle = -135;

  const [currentValue, setCurrentValue] = useState( defaultValue );

  const [styles, api] = useSpring( () => ( { rotate: getScaledRangeValue( currentValue, min, max, minAngle, maxAngle ) } ) ); 

  const bind = useDrag( ( { first, last, movement: [, y], offset: [, oy] } ) => {

    if( first ) {

      offset = getScaledRangeValue( currentValue, min, max, minAngle, maxAngle );

    }

    y = y - offset;

    if( y <= minAngle ) {

      y = minAngle;

    }

    if( y >= maxAngle ) {

      y = maxAngle;

    }

    api.start( { rotate: -y, immediate: false, config: config.default } );

    if( last ) {

      handleOnChange( Math.floor( getScaledRangeValue( -y, minAngle, maxAngle, min, max ) ) );

    }
  
  });

  const handleOnChange = ( value ) => {

    console.log( value );

    setCurrentValue( value )

    onChange && onChange( value );

  };

  return (

    <Component {...bind()} style={styles} />

  );

};

export default Knob;