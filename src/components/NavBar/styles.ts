import styled, { css } from 'styled-components';
import { INavBar } from './interfaces';

export const StyledContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 80px;
  background-color: var(--color-gray10);
  border-bottom: 2px solid var(--color-gray6);
`;

export const StyledNavBar = styled.div<INavBar>`
  display: flex;
  width: 100%;
  max-width: 1536px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px;
  z-index: 3;

  .btn_nav {
    display: none;
  }

  @media (max-width: 768px) {
    margin: 0 10px;
    .btn_nav {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 4px;
      background-color: var(--color-gray10);
      cursor: pointer;
    }
  }

  .header-nav {
    display: flex;

    .header-nav__ul {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80px;
      .header-nav__ul__link {
        display: flex;
        font-family: var(--font-family2);
        color: var(--color-gray2);
        font-weight: 600;
        font-size: 16px;
        padding: 20px 15px;

        cursor: pointer;
        &:hover {
          color: var(--color-brand1);
        }
      }

      .header-nav__ul__separator {
        display: flex;
        width: 3px;
        height: 100%;
        margin: 0 12px;
        background: var(--color-gray6);
      }

      .header-nav__ul__user {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        p {
          display: flex;
          align-items: center;
          cursor: pointer;

          &:hover {
            color: var(--color-brand1);
          }
        }

        .header-nav__ul__user__menu {
          display: none;
          border: solid 3px var(--color-gray6);
          border-radius: 4px;
          ${(props) =>
            props.userMenu &&
            css`
              display: flex;
              animation: slideInDown 0.3s;
              flex-direction: column;
              position: absolute;
              top: 80px;
              border-radius: 4px;
              background: var(--color-gray10);

              a {
                padding: 10px 10px;
                &:hover {
                  color: var(--color-brand1);
                  background: var(--color-gray6);
                }
              }
            `};
        }
      }

      .header-nav__ul__buttons {
        display: flex;
        gap: 16px;
      }
    }

    @media (max-width: 768px) {
      .header-nav__ul {
        display: none;
        border: solid 3px var(--color-gray6);
        border-radius: 4px;
        ${(props) =>
          props.buttonMenu &&
          css`
            display: flex;
            animation: slideInDown 0.3s;
            flex-direction: column;
            position: absolute;
            top: 80px;
            right: 10px;

            border-radius: 4px;
            background: var(--color-gray10);

            .header-nav__ul__link {
              width: 200px;
            }
          `};

        .header-nav__ul__separator {
          display: flex;
          width: 100%;
          height: 3px;
          margin: 12px 0;
          background: var(--color-gray6);
        }

        .header-nav__ul__user {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;

          .header-nav__ul__user__menu {
            display: none;
            border: 0;
            border-radius: 0;
            ${(props) =>
              props.userMenu &&
              css`
                display: flex;
                animation: none;
                flex-direction: column;
                position: relative;
                top: 0;
                right: 10px;
                border-radius: 4px;
                background: var(--color-gray10);

                a {
                  padding: 10px 10px;
                  &:hover {
                    background: var(--color-gray6);
                  }
                }
              `};
          }
        }

        .header-nav__ul__buttons {
          flex-direction: column;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
