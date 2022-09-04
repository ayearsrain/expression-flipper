
import styled, { css } from 'styled-components';

export const Container = styled.main`

  width: 100%;
  max-width: 1200px;

  padding: 1rem;
  margin: 0 auto;

`;

export const Title = styled.h1`

  text-align: center;

  margin: 0 0 2rem 0;

`;

export const Form = styled.form`

  max-width: 40rem;

  padding: 1rem;
  margin: 1rem auto;

`;

export const Label = styled.label`

  display: block;
  margin-bottom: 0.5rem;

`;

const FormItem = css`

  display: block;
  width: 100%;

  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;

`;

export const Select = styled.select`

  ${FormItem}

`;

export const Input = styled.input`

  ${FormItem}

`;

