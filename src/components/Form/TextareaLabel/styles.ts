import styled from 'styled-components';

export const StyledTextareaLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  .textarea-label__error {
    color: var(--color-alert1);
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .textarea-label__error--inactive {
    color: var(--color-gray10);
  }
`;
