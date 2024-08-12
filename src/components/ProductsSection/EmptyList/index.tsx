import { StyledTitle } from '../../../styles/Typography/typography';
import { IEmptyListProps } from './interfaces';
import { StyledEmptyList } from './styles';

export const EmptyList = ({ children }: IEmptyListProps) => {
  return (
    <StyledEmptyList>
      <StyledTitle
        style='heading-6'
        tag='h6'
        weight='600'
        color='--color-alert1'
      >
        {children}
      </StyledTitle>
    </StyledEmptyList>
  );
};
