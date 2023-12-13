import { EmptyList } from '../../EmptyList';
import ProductCard from '../ProductCard';
import { IProductListProps } from './interfaces';

import { StyledProductList } from './styles';

export const ProductList = ({
  products,
  viewButtons,
  isActive,
}: IProductListProps) => {
  return (
    <>
      {products.length == 0 ? (
        <EmptyList>No momento não temos esses veículos cadastrados</EmptyList>
      ) : (
        <StyledProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewButtons={viewButtons}
              isActive={isActive}
            />
          ))}
        </StyledProductList>
      )}
    </>
  );
};
