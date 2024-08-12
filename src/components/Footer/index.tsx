import angleUpPng from '../../assets/angle-up.svg';
import logo from '../../assets/footerLogo.svg';
import { StyledText } from '../../styles/Typography/typography';
import { StyledFooter } from './styles';

export const Footer = () => {
  return (
    <StyledFooter className='footer'>
      <div className='footer--content'>
        <img src={logo} alt='Motors Shop logo' />
        <StyledText tag='p' style='body-2' weight='400' color='--color-white'>
          © 2022 - Todos os direitos reservados.
        </StyledText>
        <a href='#'>
          <img src={angleUpPng} alt='Imagem - voltar para o topo' />
        </a>
      </div>
    </StyledFooter>
  );
};
