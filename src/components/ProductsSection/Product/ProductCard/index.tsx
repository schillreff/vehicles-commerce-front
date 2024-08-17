import {
  StyledText,
  StyledTitle,
} from '../../../../styles/Typography/typography';
import { splitName } from '../../../../utils/nameInitials';
import { UserImage } from '../../../UserImage';
import { IProductCardProps } from './interfaces';
import { StyledProductCard } from './style';

const ProductCard = ({ product, viewButtons, isActive }: IProductCardProps) => {
  // const {
  //   goTo,
  //   listAnnouncementById,
  //   setIsUpdateAnnouncement,
  //   setAnnouncement,
  // } = useContext(AnnouncementContext);

  return (
    <StyledProductCard>
      <div
        className='productContentContainer'
        onClick={() => {
          // goTo(`/product?announcement=${product.id}`);
        }}
      >
        <div className='productImageContainer'>
          <img src={product.coverImage} alt={product.title} />
          {isActive === true &&
            (product.isActive === true ? (
              <StyledText
                tag='p'
                weight='500'
                style='body-2'
                className='productIsActiveContainer'
                color='--color-white'
              >
                {'Ativo'}
              </StyledText>
            ) : (
              <StyledText
                tag='p'
                style='body-2'
                weight='500'
                className='productIsInactiveContainer'
                color='--color-white'
              >
                {'Inativo'}
              </StyledText>
            ))}
        </div>

        <div className='productTitleContainer'>
          <StyledTitle
            style='heading-7'
            className='productTitle'
            tag='h6'
            weight='600'
            color='--color-gray1'
          >
            {product.title}
          </StyledTitle>
        </div>

        <div className='productDescriptionContainer'>
          <StyledText
            style='body-2'
            className='productDescription'
            tag='p'
            weight='400'
            color='--color-gray2'
          >
            {product.description}
          </StyledText>
        </div>

        <div className='productUserImageContainer'>
          <UserImage name={product.User.fullName} size='32px' />

          <StyledText
            tag='p'
            className='productUserName'
            style='body-2'
            weight='500'
            color='--color-gray2'
          >
            {splitName(product.User.fullName)}
          </StyledText>
        </div>

        <div className='productInfoContainer'>
          <div className='productVehicleInfo'>
            <StyledText
              className='productInfo'
              style='body-2'
              tag='p'
              weight='500'
              color='--color-brand1'
            >
              {product.mileage} KM
            </StyledText>

            <StyledText
              className='productInfo'
              style='body-2'
              tag='p'
              weight='500'
              color='--color-brand1'
            >
              {product.year}
            </StyledText>
          </div>

          <StyledTitle
            tag='h6'
            style='heading-7'
            className='productPrice'
            weight='500'
            color='--color-gray1'
          >
            {`R$ ${product.price}`}
          </StyledTitle>
        </div>
      </div>

      {/* {viewButtons && (
        <div className='productButtonsContainer'>
          <Button
            type='button'
            $width='fit-content'
            $buttonText=''
            $backgroundColor='--color-grey8'
            $color='--color-grey1'
            $borderColor='--color-grey1'
            $borderLength='2px'
            onClick={() => {
              setAnnouncement(product);
              setIsUpdateAnnouncement(true);
            }}
          >
            Editar
          </Button>

          <Button
            type='button'
            $width='fit-content'
            $buttonText=''
            $backgroundColor='--color-grey8'
            $color='--color-grey1'
            $borderColor='--color-grey1'
            $borderLength='2px'
            onClick={() => {
              listAnnouncementById(product.id);
              goTo(`/product?announcement=${product.id}`);
            }}
          >
            Ver como
          </Button>
        </div>
      )} */}
    </StyledProductCard>
  );
};

export default ProductCard;
