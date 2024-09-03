import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldValues } from 'react-hook-form';
import { IModals } from '../../components/Modal/interfaces';

export interface IImage {
  id: string;
  url: string;
}

export interface IAnnouncement {
  id: string;
  title: string;
  typeSale: string;
  year: number;
  mileage: number;
  price: string;
  description: string;
  typeVehicle: string;
  coverImage: string;
  isActive: boolean;
  User: {
    id: string;
    fullName: string;
    description: string;
    phone: string;
  };
  images: IImage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IComment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  User: {
    id: string;
    fullName: string;
    phone: string;
  };
}

export interface IAnnouncementProviderProps {
  children: ReactNode;
}

export interface IAnnouncementContext {
  announcements: IAnnouncement[];
  setAnnouncements: Dispatch<SetStateAction<IAnnouncement[]>>;
  announcementsSeller: IAnnouncement[];
  setAnnouncementsSeller: Dispatch<SetStateAction<IAnnouncement[]>>;
  announcement: IAnnouncement | null;
  setAnnouncement: Dispatch<SetStateAction<IAnnouncement | null>>;
  announcementIdToDelete: string;
  setAnnouncementIdToDelete: Dispatch<React.SetStateAction<string>>;
  modalAnnouncement: IModals;
  setModalAnnouncement: Dispatch<SetStateAction<IModals>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  listAnnouncements: () => void;
  listAnnouncementsSeller: (id: string) => void;
  createAnnouncement: (data: FieldValues) => void;
  updateAnnouncement: (data: FieldValues, id: string) => Promise<void>;
  deleteAnnouncement: (id: string) => Promise<void>;
  callFunctionToDeleteAnnouncement: (id: string) => void;
}
