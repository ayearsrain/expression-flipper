
import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Component = styled( animated.div )`

  position: relative;

  width: 3.8rem;
  height: 3.8rem;

  border-radius: 50%;

  background: #111;
  box-shadow: 0 0 16px rgba( 0,0,0,0.5 );

  padding: 0.25rem;

  // transform: rotate( -135deg );

  touch-action: none;

  &:before, 
  &:after {

    content: '';

    display: block;
    box-sizing: border-box;

  }

  &:before {  

    width: 100%;
    height: 100%;

    border-radius: 50%;
    border: 0.15rem dashed #111;

    background: radial-gradient( #fff, #fff 60%, #111 );

  }

  &:after {

    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX( -50% );

    width: 0.25rem;
    height: 1rem;

    background: #111;

    border-radius: 0.25rem;
    
  }

`;

