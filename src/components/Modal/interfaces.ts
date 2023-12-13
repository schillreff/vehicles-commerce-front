import { ReactNode } from 'react';
import { ImodalsUser } from '../../contexts/User/interfaces';

export interface IModalProps {
  children: ReactNode;
  title: string;
  closeModal: React.Dispatch<React.SetStateAction<ImodalsUser>>;
  modal: ImodalsUser;
}
