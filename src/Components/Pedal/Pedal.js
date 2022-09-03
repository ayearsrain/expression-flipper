
import React, { useEffect, useRef, useState } from 'react';

import Knob from '../Knob/Knob';
import Led from '../Led/Led';
import Switch from '../Switch/Switch';
import { Case, Label, Grid, GridItem } from './Pedal.Styled';

const Pedal = () => {

  const minRatio = 0;
  const maxRatio = 10;

  const [value, setValue] = useState( 0 );
  const [isEnabled, setIsEnabled] = useState( false );
  const [rate, setRate] = useState( 50 );
  const [ratio, setRatio] = useState( 5 );

  const tick = useRef( 0 );

  const handleRateKnobOnChange = ( value ) => {

    console.log( 'rate changed', value );

    setRate( 100 - value );

  };

  const handleRatioKnobOnChange = ( value ) => {

    console.log( 'ratio changed', value );

    setRatio( value );

  };

  const handleSwitchPress = () => {

    setIsEnabled( currentValue => !currentValue );

  };

  useEffect( () => {

    let interval;

    if( isEnabled ) {

      interval = setInterval( () => {

        if( tick.current < ratio ) {

          setValue( 0 );

        } else {

          setValue( 1 );

        }

        if( tick.current < maxRatio - 1 ) {

          ++tick.current;

        } else {

          tick.current = 0;

        }

      }, rate * 10 );

    }

    return () => {

      clearInterval( interval );

    };

  }, [rate, ratio, isEnabled] );

  return (
  
    <Case>

      <Grid>

        <GridItem col="B" row="TWO">

          <Label>Rate</Label>

        </GridItem>

        <GridItem col="B" row="THREE">

          <Knob
            defaultValue={rate}
            onChange={handleRateKnobOnChange} />

        </GridItem>

        <GridItem col="B" row="FOUR">

          <Label>Ratio</Label>

        </GridItem>

        <GridItem col="B" row="FIVE">

          <Knob
            min={minRatio}
            max={maxRatio}
            defaultValue={ratio}
            onChange={handleRatioKnobOnChange} />

        </GridItem>

        <GridItem col="B" row="SEVEN">
    
          <Led isEnabled={isEnabled} colour={value === 0 ? '#4182da' : '#da4a4a'} />

        </GridItem>

        <GridItem col="B" row="NINE">

          <Switch onPress={handleSwitchPress} />

        </GridItem>

      </Grid>

    </Case>

  );

};

export default Pedal;