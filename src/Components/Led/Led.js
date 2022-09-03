
import React from 'react';

import { Housing, Component } from './Led.Styled';

const Led = ( { isEnabled, colour = 'red' } ) => (

  <Housing>

    <Component isEnabled={isEnabled} colour={colour} />

  </Housing>

);

export default Led;