import { MdClose } from 'react-icons/md';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { StyledTitle } from '../../styles/Typography/typography';
import { IModalProps } from './interfaces';
import { StyledModal } from './style';

export const Modal = ({ children, title, closeModal, modal }: IModalProps) => {
  const modalRef = useOutsideClick(() => {
    closeModal(modal);
  });
  return (
    <StyledModal>
      <div className='container-modal'>
        <div className='container-modal__content' ref={modalRef}>
          <div className='container-modal__content__header'>
            <StyledTitle
              tag='h3'
              style='heading-7'
              weight='500'
              color='--color-gray1'
            >
              {title}
            </StyledTitle>
            <div
              className='container-modal__content__close'
              onClick={() => closeModal(modal)}
            >
              <MdClose size={30}/>
            </div>
          </div>
          {children}
        </div>
      </div>
    </StyledModal>
  );
};