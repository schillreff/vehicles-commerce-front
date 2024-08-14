import styled from 'styled-components';

export const StyledInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  .input-label__error {
    color: var(--color-alert1);
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .input-label__error--inactive {
    color: var(--color-gray10);
  }
`;
