import { ReactNode } from 'react';

export interface IModals {
  recoverPassword?: boolean;
  editUser?: boolean;
  editAddress?: boolean;
  deleteUser?: boolean;
  createAnnouncement?: boolean;
  updateAnnouncement?: boolean;
  deleteAnnouncement?: boolean;
}

export interface IModalProps {
  children: ReactNode;
  title: string;
  closeModal: React.Dispatch<React.SetStateAction<IModals>>;
  modal: IModals;
}
