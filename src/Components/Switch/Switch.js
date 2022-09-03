
import React from 'react';

import { Nut, Button, Wrapper } from './Switch.Styled';

const Switch = ( { onPress } ) => {

  return (

    <Wrapper>

      {/* <Nut>&#x2B22;</Nut> */}

      <Nut />

      <Button onClick={onPress}></Button>

    </Wrapper>

  );

};

export default Switch;