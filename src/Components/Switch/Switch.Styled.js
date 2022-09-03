
import styled from 'styled-components';

export const Wrapper = styled.div`

  position: relative;

  width: 4rem;
  height: 4rem;
  padding: 0.4rem;

  border-radius: 50%;

  background: #111;

  box-shadow: 0 0 4px rgba( 0,0,0,0.5 );

`;

export const Nut = styled.div`

  position: absolute;
  top: 0;
  left: -0.05rem;

  overflow: hidden;
  background: transparent;
  width: 4rem;
  height: 4rem;
  transform: rotate( -50deg ) skewX( 30deg ) scaleY( .866 );

  :before {
    position: absolute;
    right: 6.7%;
    bottom: 0;
    left: 6.7%;
    top: 0;
    transform: scaleY( 1.155 ) skewX( -30deg ) rotate( 30deg );
    background: linear-gradient( -45deg, silver, grey );
    content: '';

  }

`;

export const Button = styled.button`

  position: relative;

  width: 100%;
  height: 100%;

  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba( 0,0,0,0.5 );

  background: radial-gradient( silver, silver 50%, grey );

  transition: transform 0.25s ease;

  &:active {

    transform: scale( 0.9 );

  }

`;