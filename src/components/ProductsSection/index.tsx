import { StyledTitle } from '../../styles/Typography/typography';
import { IProductsSectionProps } from './interfaces';
import { StyledProductsSection } from './styles';

export const ProductsSection = ({
  id,
  listName,
  children,
}: IProductsSectionProps) => {
  return (
    <StyledProductsSection>
      <StyledTitle
        id={id}
        tag='h5'
        style='heading-5'
        weight='600'
        color='--color-gray1'
      >
        {listName}
      </StyledTitle>
      <> {children}</>
    </StyledProductsSection>
  );
};
