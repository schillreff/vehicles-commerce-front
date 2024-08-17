import { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/logo.svg';
import { UserContext } from '../../contexts/User';
import {
  StyledHiperLink,
  StyledText,
} from '../../styles/Typography/typography';
import { splitName } from '../../utils/nameInitials';
import { Button } from '../Button';
import { UserImage } from '../UserImage';
import { StyledContainerHeader, StyledNavBar } from './styles';

export const NavBar = () => {
  const { navigateTo, user, setUser, setToken, modalUser, setModalUser } =
    useContext(UserContext);
  const [buttonMenu, setButtonMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  function logout() {
    localStorage.removeItem('@usermotorsshop:token');
    setUserMenu(false);
    setButtonMenu(false);
    setUser(null);
    setToken(null);
    navigateTo('/');
  }

  return (
    <StyledContainerHeader>
      <StyledNavBar $buttonMenu={buttonMenu} $userMenu={userMenu}>
        <Link to={'/'}>
          <img src={logo} alt='logo' />
        </Link>
        <div className='header-nav'>
          <ul className='header-nav__ul'>
            <HashLink className='header-nav__ul__link' to={'/#car'}>
              Carros
            </HashLink>
            <HashLink className='header-nav__ul__link' to={'/#motorcycle'}>
              Motos
            </HashLink>
            <HashLink className='header-nav__ul__link' to={'/#auction'}>
              Leilão
            </HashLink>
            <div className='header-nav__ul__separator'></div>
            {user ? (
              <div
                className='header-nav__ul__user'
                onClick={() => setUserMenu(!userMenu)}
              >
                <UserImage name={user.fullName} size='50px' />
                <StyledText
                  tag='p'
                  style='body-1'
                  weight='600'
                  color='--color-gray2'
                >
                  {splitName(user.fullName)}
                  <BiChevronDown size={20} />
                </StyledText>

                <div className='header-nav__ul__user__menu'>
                  <StyledHiperLink
                    tag='a'
                    style='body-1'
                    weight='600'
                    color='--color-gray2'
                    onClick={() =>
                      setModalUser({ ...modalUser, editUser: true })
                    }
                  >
                    Editar Perfil
                  </StyledHiperLink>
                  <StyledHiperLink
                    tag='a'
                    style='body-1'
                    weight='600'
                    color='--color-gray2'
                    onClick={() =>
                      setModalUser({ ...modalUser, editAddress: true })
                    }
                  >
                    Editar Endereço
                  </StyledHiperLink>
                  {user.isSeller && (
                    <StyledHiperLink
                      tag='a'
                      style='body-1'
                      weight='600'
                      color='--color-gray2'
                      onClick={() => {
                        navigateTo(`/seller?user=${user.id}`);
                        setUserMenu(false);
                        setButtonMenu(false);
                      }}
                    >
                      Meus Anúncios
                    </StyledHiperLink>
                  )}
                  <StyledHiperLink
                    tag='a'
                    style='body-1'
                    weight='600'
                    color='--color-gray2'
                    onClick={() => logout()}
                  >
                    Sair
                  </StyledHiperLink>
                </div>
              </div>
            ) : (
              <div className='header-nav__ul__buttons'>
                <Button
                  type='button'
                  $size='big'
                  $width='100%'
                  $backgroundColor='--color-brand1'
                  $color='--color-white'
                  $borderColor='--color-brand1'
                  $hoverBackgroundColor='--color-brand4'
                  $hoverColor='--color-brand1'
                  $hoverBorderColor='--color-brand4'
                  onClick={() => {
                    setUserMenu(false);
                    setButtonMenu(false);
                    navigateTo('login');
                  }}
                >
                  Login
                </Button>

                <Button
                  type='button'
                  $size='big'
                  $width='100%'
                  $color='--color-gray0'
                  $backgroundColor='--color-gray10'
                  $borderColor='--color-gray4'
                  $hoverColor='--color-white'
                  $hoverBackgroundColor='--color-gray1'
                  $hoverBorderColor='--color-gray1'
                  onClick={() => {
                    setUserMenu(false);
                    setButtonMenu(false);
                    navigateTo('register');
                  }}
                >
                  Cadastrar
                </Button>
              </div>
            )}
          </ul>
        </div>

        {buttonMenu ? (
          <button className='btn_nav' onClick={() => setButtonMenu(false)}>
            <AiOutlineClose size={30} />
          </button>
        ) : (
          <button className='btn_nav' onClick={() => setButtonMenu(true)}>
            <AiOutlineMenu size={30} />
          </button>
        )}
      </StyledNavBar>
    </StyledContainerHeader>
  );
};
