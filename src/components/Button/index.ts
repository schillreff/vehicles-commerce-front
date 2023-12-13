import styled, { css } from 'styled-components';
import { IButtonProps } from './interfaces';

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.width};
  border: 1.5px solid var(${(props) => props.borderColor});
  border-radius: 4px;
  background: var(${(props) => props.backgroundColor});
  color: var(${(props) => props.color});
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 1.5px solid var(${(props) => props.hoverBorderColor});
    background: var(${(props) => props.hoverBackgroundColor});
    color: var(${(props) => props.hoverColor});
  }

  ${(props) => {
    switch (props.size) {
      case 'big':
        return css`
          padding: 12px 28px;
          font-size: 16px;
        `;
      case 'medium':
        return css`
          padding: 12px 20px;
          font-size: 14px;
        `;
      default:
        return false;
    }
  }}
`;
