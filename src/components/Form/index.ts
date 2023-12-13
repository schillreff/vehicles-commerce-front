import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 512px;
  padding: 40px 40px;
  border-radius: 4px;
  gap: 20px;
  background: var(--color-gray10);

  @media (max-width: 768px) {
    max-width: 320px;
    padding: 40px 24px;
  }
`;

export const StyledLabel = styled.label`
  color: var(--color-gray1);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1.5px solid var(--color-gray8);
  border-radius: 4px;
  color: var(--color-gray3);
  font-family: 'Inter', sans-serif;
  font-size: 16px;

  &:hover {
    background-color: var(--color-gray8);
  }

  &:focus-visible {
    background-color: var(--color-gray9);
    outline: 1.5px solid var(--color-brand2);
    color: var(--color-gray0);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px 16px;
  height: 70px;
  border: 1.5px solid var(--color-gray8);
  border-radius: 4px;
  color: var(--color-gray3);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  resize: none;

  &:hover {
    background-color: var(--color-gray8);
  }

  &:focus-visible {
    background-color: var(--color-gray9);
    outline: 1.5px solid var(--color-brand2);
    color: var(--color-gray0);
  }
`;

export const StyledSelect = styled.select`
  border: none;
  overflow: hidden;
  height: 48px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;

  ::-moz-focus-inner {
    border: 0;
  }
  :focus {
    outline: none;
  }
`;

export const StyledOption = styled.option`
  display: inline-block;
  width: calc((100% - 8px) / 2);
  padding: 12px 0;
  text-align: center;
  border-radius: 4px;
  color: var(--color-gray0);
  border: var(--color-gray3) solid 2px;
  cursor: pointer;

  &:first-of-type {
    margin-right: 8px;
  }

  &:checked {
    background-color: var(--color-brand1);
    color: var(--color-white);
    border: transparent solid 2px;
  }

  &:hover {
    background: var(--color-brand4);
    color: var(--color-brand1);
  }
`;
