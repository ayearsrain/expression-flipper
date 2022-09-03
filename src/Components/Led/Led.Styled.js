
import styled from 'styled-components';
import { darken, rgba } from 'polished';

export const Housing = styled.div`

  position: relative;

  width: 1.4rem;
  height: 1.4rem;

  border-radius: 50%;
  box-shadow: 0 0 0 4px #222, 0 0 0 8px #111, 0 0 4px 8px rgba( 0, 0, 0, 0.5 );

  margin: 8px;

`;

export const Component = styled.div`

  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  background: radial-gradient( #f5f4ed, ${darken( 0.25, '#f5f4ed' )} );
  box-shadow: 0 0 0 0 rgba( 255, 255, 255, 0 );

  transition: background, box-shadow .25s ease;

  ${( { isEnabled, colour } ) => isEnabled && `

    background: radial-gradient( ${colour}, ${darken( 0.2, colour )} );
    box-shadow: 0 0 16px 8px ${rgba( colour, 0.5 )};

  `}

`;
