import { ForwardedRef, forwardRef } from 'react';
import { StyledInput, StyledLabel } from '..';
import { IInputLabelProps } from './interfaces';
import { StyledInputLabel } from './styles';

export const InputLabel = forwardRef(
  (
    { id, label, placeholder, type, error, ...rest }: IInputLabelProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <StyledInputLabel>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput
          ref={ref}
          id={id}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
        <span
          className={
            error
              ? 'input-label__error'
              : 'input-label__error input-label__error--inactive'
          }
        >
          {error ? error : '.'}
        </span>
      </StyledInputLabel>
    );
  },
);
InputLabel.displayName = 'InputLabel';
