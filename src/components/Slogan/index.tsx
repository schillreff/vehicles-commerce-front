import { StyledText, StyledTitle } from '../../styles/Typography/typography';
import { Button } from '../Button';
import { StyledSlogan } from './styles';
export const Slogan = () => {
  return (
    <StyledSlogan>
      <div className='slogan-content'>
        <StyledTitle
          tag='h1'
          style='heading-3'
          weight='700'
          color='--color-gray10'
        >
          Velocidade e experiência em um lugar feito para você
        </StyledTitle>

        <StyledText tag='p' style='body-1' color='--color-gray9' weight='400'>
          Um ambiente feito para você explorar o seu melhor
        </StyledText>

        <div className='slogan-content__buttons'>
          <a href='#car'>
            <Button
              type='submit'
              size='big'
              width='100%'
              backgroundColor='--color-brand1'
              color='--color-gray10'
              borderColor='--color-gray10'
              hoverBackgroundColor='--color-gray10'
              hoverColor='--color-brand1'
              hoverBorderColor='--color-gray10'
            >
              Carros
            </Button>
          </a>
          <a href='#motorcycle'>
            <Button
              type='submit'
              size='big'
              width='100%'
              backgroundColor='--color-brand1'
              color='--color-gray10'
              borderColor='--color-gray10'
              hoverBackgroundColor='--color-gray10'
              hoverColor='--color-brand1'
              hoverBorderColor='--color-gray10'
            >
              Motos
            </Button>
          </a>
        </div>
      </div>
    </StyledSlogan>
  );
};
