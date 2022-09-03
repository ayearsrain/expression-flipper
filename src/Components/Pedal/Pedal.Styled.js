
import styled from 'styled-components';

export const Case = styled.div`

  width: 12rem;
  height: 27.6rem;
  margin: 0 auto;

  border-radius: 1.4rem;
  border: 2px solid silver;

  background: #fff;
  box-shadow: 2px 2px 8px rgba( 0,0,0,0.2 );

`;

export const Label = styled.p`

  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  
`;

export const Grid = styled.div`

  display: grid;

  width: 100%;
  height: 100%;

  grid-template-columns: [A] 33% [B] 33% [C] 33%;
  grid-template-rows: [ONE] 10% [TWO] 10% [THREE] 10% [FOUR] 10% [FIVE] 10% [SIX] 10% [SEVEN] 10% [EIGHT] 10% [NINE] 10% [TEN] 10%;

`;

export const GridItem = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: ${props => props.col};
  grid-row: ${props => props.row};

`;
