import styled, { css } from 'styled-components';

export const StyledUserImage = styled.div<{
  color: string;
  size: string;
  fontSize?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}

  color: var(--color-white);
  font-family: var(--font-family2);
  font-weight: 500;
  font-size: 14px;

  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}

  ${({ color }) => css`
    background-color: var(${`--color-random${color}`});
  `}
`;
