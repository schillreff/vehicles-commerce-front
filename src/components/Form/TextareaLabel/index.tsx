import { ForwardedRef, forwardRef } from 'react';
import { StyledLabel, StyledTextarea } from '..';
import { ITextareaLabelProps } from './interfaces';
import { StyledTextareaLabel } from './styles';

export const TextareaLabel = forwardRef(
  (
    { id, label, placeholder, error, ...rest }: ITextareaLabelProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <StyledTextareaLabel>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledTextarea ref={ref} id={id} placeholder={placeholder} {...rest} />
        <span
          className={
            error
              ? 'textarea-label__error'
              : 'textarea-label__error textarea-label__error--inactive'
          }
        >
          {error ? error : '.'}
        </span>
      </StyledTextareaLabel>
    );
  },
);
TextareaLabel.displayName = 'TextareaLabel';
