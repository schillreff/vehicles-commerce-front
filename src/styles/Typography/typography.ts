import styled, { css } from 'styled-components';
import { BaseTitle } from '../BaseTitle';
import { ITypographyProps } from './interfaces';
import { BaseText } from '../BaseText';

export const StyledTitle = styled(BaseTitle)<ITypographyProps>`
  color: var(${(props) => props.color});
  font-family: var(--font-family1);
  font-style: normal;
  font-weight: ${(props) => props.weight};

  ${(props) => {
    switch (props.style) {
      case 'heading-1':
        return css`
          font-size: 44px;
          line-height: 56px;
        `;
      case 'heading-2':
        return css`
          font-size: 46px;
          line-height: 45px;
        `;
      case 'heading-3':
        return css`
          font-size: 32px;
          line-height: 40px;
        `;
      case 'heading-4':
        return css`
          font-size: 28px;
          line-height: 35px;
        `;
      case 'heading-5':
        return css`
          font-size: 24px;
          line-height: 30px;
        `;
      case 'heading-6':
        return css`
          font-size: 20px;
          line-height: 25px;
        `;
      case 'heading-7':
        return css`
          font-size: 16px;
          line-height: 20px;
        `;
      default:
        return false;
    }
  }}
`;

export const StyledText = styled(BaseText)<ITypographyProps>`
  color: var(${(props) => props.color});
  font-family: var(--font-family2);
  font-style: normal;
  font-weight: ${(props) => props.weight};

  ${(props) => {
    switch (props.style) {
      case 'body-1':
        return css`
          font-size: 16px;
          line-height: 28px;
        `;
      case 'body-2':
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      default:
        return false;
    }
  }}
`;

export const StyledHiperLink = styled(StyledText)``;
